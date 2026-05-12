import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { Comment } from '../comments/entities/comment.entity';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepo: Repository<Post>,
    @InjectRepository(Comment) private commentsRepo: Repository<Comment>,
  ) {}

  async createComment(postId: number, dto: CreateCommentDto) {
    const post = await this.postsRepo.findOne({ where: { id: postId } });
    if (!post) throw new NotFoundException('Post no encontrado');
    const comment = this.commentsRepo.create({ ...dto, post });
    return this.commentsRepo.save(comment);
  }
}