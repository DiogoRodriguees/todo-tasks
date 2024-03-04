import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Req, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'nestjs-zod';
import { Request } from 'src/classes/dtos/Request';
import { ResponseDTO } from 'src/classes/dtos/ResponseDTO';
import { TaskListDTO } from 'src/classes/dtos/lists/TaskListDTO';
import { CreateListSchema, ListDeleteSchema } from 'src/schemas/TaskListSchema';
import { TaskListService } from './ListService';

@Controller('/v1/list')
export class TaskListController {
  constructor(private readonly taskListService: TaskListService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(CreateListSchema))
  async create(@Req() request: Request, @Body() body: TaskListDTO): Promise<ResponseDTO<TaskListDTO>> {
    const list = await this.taskListService.create(request.user.id, body.name);
    return new ResponseDTO(HttpStatus.OK, 'Create List', list);
  }

  @Get()
  async list(@Req() { user }: Request) {
    const lists = await this.taskListService.getTasksListByUser(user.id);
    return new ResponseDTO(HttpStatus.BAD_REQUEST, 'Tasks List', lists);
  }

  @Delete('/:id')
  @UsePipes(new ZodValidationPipe(ListDeleteSchema))
  async delete(@Req() { user }: Request, @Param('id') id: string) {
    const listDeleted = await this.taskListService.delete(user.id, id);
    return new ResponseDTO(HttpStatus.OK, 'Delete List', listDeleted);
  }
}
