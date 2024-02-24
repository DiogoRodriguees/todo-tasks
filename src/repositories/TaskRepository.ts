import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskQueryDTO } from 'src/classes/dtos/TaskQueryDTO';
import { TaskEntity } from 'src/entities/TaskEntity';
import { IsNull, Repository } from 'typeorm';

export class TaskRepository extends Repository<TaskEntity> {
  readonly taskTable: string;
  constructor(@InjectRepository(TaskEntity) repository: Repository<TaskEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
    this.taskTable = 'tasks';
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

  async getAllUserTasks(userId: string) {
    return await this.find({ where: { createdBy: userId, deletedAt: IsNull() } });
  }

  async getTasksByQueryParams(userId: string, queryParams: TaskQueryDTO) {
    const { updatedBy, title, description, id, deletedBy, createdAt, updatedAt, orderBy, sortBy } = queryParams;
    const query = this.createQueryBuilder(this.taskTable).where(`${this.taskTable}.created_by = :id AND ${this.taskTable}.deleted_at IS NULL `, {
      id: userId,
    });

    if (id) query.andWhere(`${this.taskTable}.id :id`, { id: id });
    if (title) query.andWhere(`${this.taskTable}.title :title`, { title: title });
    if (description) query.andWhere(`${this.taskTable}.description :description`, { description: description });
    if (updatedBy) query.andWhere(`${this.taskTable}.updated_by = :updatedBy`, { updatedBy: updatedBy });
    if (deletedBy) query.andWhere(`${this.taskTable}.deleted_by :deletedBy`, { deletedBy: deletedBy });
    if (createdAt) query.andWhere(`${this.taskTable}.created_at :createdAt`, { createdAt: createdAt });
    if (updatedAt) query.andWhere(`${this.taskTable}.updated_at :updatedAt`, { updatedAt: updatedAt });
    if (sortBy) query.orderBy(`${this.taskTable}.${sortBy}`, orderBy);

    return query.getMany();
  }
}
