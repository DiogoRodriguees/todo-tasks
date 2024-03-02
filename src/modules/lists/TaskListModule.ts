import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksListEntity } from './ListEntity';
import { TaskListController } from './TaskListController';
import { TaskListRepository } from './TaskListRepository';
import { TaskListService } from './TaskListService';

@Module({
  imports: [TypeOrmModule.forFeature([TasksListEntity])],
  controllers: [TaskListController],
  providers: [TaskListRepository, TaskListService],
})
export class TaskListModule {}
