import { Injectable } from '@nestjs/common';
import { TasksListEntity } from './ListEntity';
import { TaskListRepository } from './TaskListRepository';

@Injectable()
export class TaskListService {
  constructor(private readonly taskListRepository: TaskListRepository) {}

  async create(userId: string, name: string) {
    const listEntity = new TasksListEntity(name, userId);
    return await this.taskListRepository.createNewList(listEntity);
  }

  async getTasksListByUser(userId: string) {
    return this.taskListRepository.getTasksListByUserId(userId);
  }

  async delete(userId: string, id: string) {
    const list = await this.taskListRepository.getTasksListById(userId, id);
    list.delete(userId);
    await this.taskListRepository.save(list);
    return await this.taskListRepository.softRemove(list);
  }
}
