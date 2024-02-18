import { Module } from '@nestjs/common';
import { TaskController } from 'src/controllers/TaskController';
import { AuthModule } from './AuthModule';
import { MessageModule } from './MessageModule';

@Module({
  imports: [AuthModule, MessageModule],
  controllers: [TaskController],
})
export class TaskModule {}
