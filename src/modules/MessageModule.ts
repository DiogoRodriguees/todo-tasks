import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import MessageClientConfig from 'src/configs/RabbitMQConfig';
import { TaskMessageProducer } from 'src/producers/TaskMessageProducer';

@Module({
  imports: [ClientsModule.register([MessageClientConfig])],
  providers: [TaskMessageProducer],
  exports: [TaskMessageProducer],
})
export class MessageModule {}
