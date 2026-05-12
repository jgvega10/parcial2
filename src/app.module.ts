import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MetricsModule } from './metrics/metrics.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database:'instagram.db',
      synchronize:true,
      autoLoadEntities:true,
    }),
  
    AuthModule, 
    MetricsModule, 
    UsersModule, 
    PostsModule, 
    CommentsModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
