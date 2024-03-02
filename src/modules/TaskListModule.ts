import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskListController } from 'src/controllers/TaskListController';
import { TasksListEntity } from 'src/entities/ListEntity';
import { TaskListRepository } from 'src/repositories/TaskListRepository';
import { TaskListService } from 'src/services/TaskListService';

@Module({
  imports: [TypeOrmModule.forFeature([TasksListEntity])],
  controllers: [TaskListController],
  providers: [TaskListRepository, TaskListService],
})
export class TaskListModule {}
