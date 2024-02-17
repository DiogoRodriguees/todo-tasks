import { Module } from '@nestjs/common';
import { TaskController } from 'src/controllers/TaskController';
import { MessageModule } from './MessageModule';

@Module({
  imports: [MessageModule],
  controllers: [TaskController],
})
export class TaskModule {}
