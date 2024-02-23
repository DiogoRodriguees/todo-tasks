import { Body, Controller, HttpStatus, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ResponseDTO } from 'src/classes/dtos/ResponseDTO';
import { TaskDTO } from 'src/classes/dtos/TaskDTO';
import { AuthGuard } from 'src/services/AuthGuard';
import { TaskService } from 'src/services/TaskService';

@Controller()
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Req() request: any, @Body() taskDTO: TaskDTO) {
    const task = await this.taskService.create({ ...taskDTO, createdBy: request.user.id });
    return new ResponseDTO(HttpStatus.OK, 'Task created', { task });
  }

  @Put()
  async update(@Req() request: any, @Body() taskDTO: TaskDTO) {
    const task = await this.taskService.update({ ...taskDTO, updatedBy: request.user.id });
    return new ResponseDTO(HttpStatus.OK, 'Task updated', { task });
  }
}
