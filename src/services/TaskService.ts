import { Injectable } from '@nestjs/common';
import { TaskDTO } from 'src/classes/dtos/tasks/TaskDTO';
import { TaskQueryDTO } from 'src/classes/dtos/tasks/TaskQueryDTO';
import { TaskRepository } from 'src/repositories/TaskRepository';
import { TaskEntity } from '../entities/TaskEntity';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(task: TaskDTO, userId: string): Promise<TaskDTO> {
    const taskEntity = new TaskEntity(userId, null, task.title, task.description, task.list);
    const taskCreated: TaskDTO = await this.taskRepository.save(taskEntity);
    return taskCreated;
  }

  async find(userId: string, query: TaskQueryDTO): Promise<TaskEntity[]> {
    const { updatedBy, title, description, id, deletedBy, createdAt, updatedAt, orderBy, sortBy } = query;
    const queryParams = new TaskQueryDTO(updatedBy, title, description, id, deletedBy, createdAt, updatedAt, sortBy, orderBy);
    return await this.taskRepository.getTasksByQueryParams(userId, queryParams);
  }

  async update(task: TaskDTO): Promise<TaskEntity> {
    const taskEntity = await this.taskRepository.getById(task.id);
    taskEntity.update(task.updatedBy, task.title, task.description, task.list);
    return await this.taskRepository.save(taskEntity);
  }

  async delete(id: string, userId: string): Promise<TaskEntity> {
    const task = await this.taskRepository.getById(id);
    task.delete(userId);
    await this.taskRepository.save(task);
    return await this.taskRepository.softRemove(task);
  }
}
