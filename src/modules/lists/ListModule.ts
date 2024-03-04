import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskListController } from './ListController';
import { TasksListEntity } from './ListEntity';
import { TaskListRepository } from './ListRepository';
import { TaskListService } from './ListService';

@Module({
  imports: [TypeOrmModule.forFeature([TasksListEntity])],
  controllers: [TaskListController],
  providers: [TaskListRepository, TaskListService],
})
export class TaskListModule {}
