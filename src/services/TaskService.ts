import { Injectable } from '@nestjs/common';
import { TaskDTO } from 'src/classes/dtos/TaskDTO';
import { TaskEntity } from 'src/entities/TaskEntity';
import { TaskRepository } from 'src/repositories/TaskRepository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}
  async create(taskDTO: TaskDTO) {
    const task = new TaskEntity(taskDTO.createdBy, null, taskDTO.title, taskDTO.description);
    const { id, title, createdBy, description, updatedBy } = await this.taskRepository.save(task);
    return { id: id, title: title, createdBy: createdBy, description: description, updatedBy: updatedBy };
  }

  async update(taskDTO: TaskDTO) {
    const task = await this.taskRepository.getById(taskDTO.id);
    task.update(taskDTO);
    return await this.taskRepository.save(task);
  }
}
