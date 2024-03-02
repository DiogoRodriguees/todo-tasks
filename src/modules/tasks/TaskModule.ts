import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from 'src/modules/tasks/TaskController';
import { TaskService } from 'src/modules/tasks/TaskService';
import { MessageModule } from '../MessageModule';
import { AuthModule } from '../auth/AuthModule';
import { TaskEntity } from './TaskEntity';
import { TaskRepository } from './TaskRepository';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]), AuthModule, MessageModule],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository],
})
export class TaskModule {}
