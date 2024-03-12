import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { TaskDTO } from 'src/classes/dtos/tasks/TaskDTO';

@Injectable()
export class TaskMessageProducer {
  constructor(@Inject(process.env.MAIL_CLIENT as string) private readonly client: ClientProxy) {}

  async taskCreated(message: TaskDTO) {
    this.client.send('CREATE_TASK', message).subscribe({
      complete: () => Logger.log('Send message to emails', 'Task Producer'),
      error: (err) => Logger.error(err, 'Task Producer'),
    });
  }
}
