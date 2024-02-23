import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import ClientMessageConfig from 'src/configs/RabbitMQConfig';
import { TaskMessageProducer } from 'src/producers/TaskMessageProducer';

@Module({
  imports: [ClientsModule.register([ClientMessageConfig])],
  providers: [TaskMessageProducer],
  exports: [TaskMessageProducer],
})
export class MessageModule {}
