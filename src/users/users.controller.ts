import {
  Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreatePostDto } from '../posts/dto/create-post.dto';
import { ApiKeyGuard } from '../auth/api-key.guard';

@Controller()
@UseGuards(ApiKeyGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('users')
  create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }

  @Get('users')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('users/:id/posts')
  createPost(@Param('id', ParseIntPipe) id: number, @Body() dto: CreatePostDto) {
    return this.usersService.createPost(id, dto);
  }

  @Get('users/:id/posts')
  findPosts(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findPosts(id);
  }
}