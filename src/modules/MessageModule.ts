import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import ClientMessageMailConfig from 'src/configs/ClientMessageMailConfig';
import { TaskMessageProducer } from 'src/producers/TaskMessageProducer';

@Module({
  imports: [ClientsModule.register([ClientMessageMailConfig])],
  providers: [TaskMessageProducer],
  exports: [TaskMessageProducer],
})
export class MessageModule {}
