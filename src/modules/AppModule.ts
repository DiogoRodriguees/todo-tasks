import { Module } from '@nestjs/common';
import { AuthModule } from './AuthModule';
import { MessageModule } from './MessageModule';
import { TaskModule } from './TaskModule';

@Module({
  imports: [AuthModule, MessageModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
