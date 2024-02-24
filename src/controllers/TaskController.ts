import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Req, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { Request } from 'src/classes/dtos/Request';
import { ResponseDTO } from 'src/classes/dtos/ResponseDTO';
import { TaskDTO } from 'src/classes/dtos/TaskDTO';
import { TaskQueryDTO } from 'src/classes/dtos/TaskQueryDTO';
import { TaskCreateSchema, TaskDeleteSchema, TaskFindSchema, TaskUpdateSchema } from 'src/schemas/TaskSchema';
import { TaskService } from 'src/services/TaskService';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(TaskCreateSchema))
  async create(@Req() request: Request, @Body() taskDTO: TaskDTO): Promise<ResponseDTO> {
    const task = await this.taskService.create(taskDTO, request.user.id);
    return new ResponseDTO(HttpStatus.OK, 'Task created', { task });
  }

  @Get()
  @UsePipes(new ZodValidationPipe(TaskFindSchema))
  async find(@Req() request: Request, @Query() query: TaskQueryDTO): Promise<ResponseDTO> {
    const tasks = await this.taskService.find(request.user.id, query);
    return new ResponseDTO(HttpStatus.OK, 'Tasks found', { tasks });
  }

  @Put()
  @UsePipes(new ZodValidationPipe(TaskUpdateSchema))
  async update(@Req() request: Request, @Body() taskDTO: TaskDTO): Promise<ResponseDTO> {
    const task = await this.taskService.update({ ...taskDTO, updatedBy: request.user.id });
    return new ResponseDTO(HttpStatus.OK, 'Task updated', task);
  }

  @Delete(':id')
  @UsePipes(new ZodValidationPipe(TaskDeleteSchema))
  async delete(@Req() request: Request, @Param('id') id: string): Promise<ResponseDTO> {
    const task = await this.taskService.delete(id, request.user.id);
    return new ResponseDTO(HttpStatus.OK, 'Task deleted', { task });
  }
}
