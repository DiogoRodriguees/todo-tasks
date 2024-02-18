import { Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { CreateTaskMessageDTO } from 'src/classes/dtos/CreateTaskMessageDTO';
import { ResponseDTO } from 'src/classes/dtos/ResponseDTO';
import { TaskMessageProducer } from 'src/producers/TaskMessageProducer';
import { AuthGuard } from 'src/services/AuthGuard';

@Controller()
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly producerMessage: TaskMessageProducer) {}

  @Post()
  async create() {
    const message = new CreateTaskMessageDTO('New Task Created');

    new Promise(
      async (resolve) =>
        await this.producerMessage.taskCreated(resolve, message),
    );

    return new ResponseDTO(HttpStatus.OK, 'Task created', {});
  }
}
