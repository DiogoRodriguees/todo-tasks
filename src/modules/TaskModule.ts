import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from 'src/controllers/TaskController';
import { TaskRepository } from 'src/repositories/TaskRepository';
import { TaskService } from 'src/services/TaskService';
import { TaskEntity } from '../entities/TaskEntity';
import { AuthModule } from './AuthModule';
import { MessageModule } from './MessageModule';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]), AuthModule, MessageModule],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
