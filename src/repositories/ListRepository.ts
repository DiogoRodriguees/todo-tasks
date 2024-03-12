import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskListDTO } from 'src/classes/dtos/lists/TaskListDTO';
import { Repository } from 'typeorm';
import { TasksListEntity } from '../entities/ListEntity';

@Injectable()
export class TaskListRepository extends Repository<TasksListEntity> {
  constructor(@InjectRepository(TasksListEntity) repository: Repository<TasksListEntity>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async createNewList(list: TasksListEntity): Promise<TaskListDTO> {
    const { id, name, createdBy, updatedBy } = await this.save(list);
    return { id, name, createdBy, updatedBy };
  }

  async getTasksListByUserId(userId: string) {
    return await this.find({
      select: {
        id: true,
        name: true,
        createdBy: true,
        updatedBy: true,
      },
      where: {
        createdBy: userId,
      },
    });
  }

  async getTasksListById(userID: string, id: string) {
    const list = await this.findOne({
      where: {
        id: id,
        createdBy: userID,
      },
    });

    if (!list) new BadRequestException('List not found');
    return list;
  }
}
