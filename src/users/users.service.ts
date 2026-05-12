import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Post } from '../posts/entities/post.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreatePostDto } from '../posts/dto/create-post.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(Post) private postsRepo: Repository<Post>,
  ) {}

  create(dto: CreateUserDto) {
    const user = this.usersRepo.create(dto);
    return this.usersRepo.save(user);
  }

  findAll() {
    return this.usersRepo.find({ relations: ['posts'] });
  }

  async createPost(userId: number, dto: CreatePostDto) {
    const user = await this.usersRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    const post = this.postsRepo.create({ ...dto, user });
    return this.postsRepo.save(post);
  }

  async findPosts(userId: number) {
    const user = await this.usersRepo.findOne({ where: { id: userId } });
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return this.postsRepo.find({
      where: { user: { id: userId } },
      relations: ['comments'],
    });
  }
}