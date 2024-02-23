import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from 'src/entities/TaskEntity';
import { IsNull, Repository } from 'typeorm';

export class TaskRepository extends Repository<TaskEntity> {
  constructor(@InjectRepository(TaskEntity) repository: Repository<TaskEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async getById(id: string) {
    const task = await this.findOne({
      where: {
        id: id,
        deletedAt: IsNull(),
      },
    });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }
}
