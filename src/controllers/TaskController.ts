import { Controller, Get } from '@nestjs/common';
import { CreateTaskMessageDTO } from 'src/classes/dtos/CreateTaskMessageDTO';
import { TaskMessageProducer } from 'src/producers/TaskMessageProducer';

@Controller()
export class TaskController {
  constructor(private readonly producerMessage: TaskMessageProducer) {}

  @Get()
  async getHello() {
    const message = new CreateTaskMessageDTO('New Task Created');

    return new Promise(
      async (resolve) =>
        await this.producerMessage.taskCreated(resolve, message),
    );
  }
}
