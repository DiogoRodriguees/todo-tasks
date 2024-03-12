import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskListController } from '../controllers/ListController';
import { TasksListEntity } from '../entities/ListEntity';
import { TaskListRepository } from '../repositories/ListRepository';
import { TaskListService } from '../services/ListService';

@Module({
  imports: [TypeOrmModule.forFeature([TasksListEntity])],
  controllers: [TaskListController],
  providers: [TaskListRepository, TaskListService],
})
export class TaskListModule {}
