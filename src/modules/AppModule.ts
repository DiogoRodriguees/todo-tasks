import { Module } from '@nestjs/common';
import { MessageModule } from './MessageModule';
import { TaskModule } from './TaskModule';

@Module({
  imports: [MessageModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
