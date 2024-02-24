import { Injectable } from '@nestjs/common';
import { TaskDTO } from 'src/classes/dtos/TaskDTO';
import { TaskQueryDTO } from 'src/classes/dtos/TaskQueryDTO';
import { TaskEntity } from 'src/entities/TaskEntity';
import { TaskRepository } from 'src/repositories/TaskRepository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async create(taskDTO: TaskDTO, userId: string) {
    const task = new TaskEntity(userId, null, taskDTO.title, taskDTO.description);
    const { id, title, createdBy, description, updatedBy } = await this.taskRepository.save(task);
    return { id: id, title: title, createdBy: createdBy, description: description, updatedBy: updatedBy };
  }

  async find(userId: string, query: TaskQueryDTO) {
    const { updatedBy, title, description, id, deletedBy, createdAt, updatedAt, orderBy, sortBy } = query;
    const queryParams = new TaskQueryDTO(updatedBy, title, description, id, deletedBy, createdAt, updatedAt, sortBy, orderBy);
    return await this.taskRepository.getTasksByQueryParams(userId, queryParams);
  }

  async update(taskDTO: TaskDTO) {
    const task = await this.taskRepository.getById(taskDTO.id);
    task.update(taskDTO.updatedBy, taskDTO.title, taskDTO.description);
    return await this.taskRepository.save(task);
  }

  async delete(id: string, userId: string) {
    const task = await this.taskRepository.getById(id);
    task.setDeletedBy(userId);
    await this.taskRepository.save(task);
    return await this.taskRepository.softRemove(task);
  }
}
