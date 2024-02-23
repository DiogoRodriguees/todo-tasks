import { Module } from '@nestjs/common';
import { AuthModule } from './AuthModule';
import { DatabaseModule } from './DatabaseModule';
import { MessageModule } from './MessageModule';
import { TaskModule } from './TaskModule';

@Module({
  imports: [DatabaseModule, AuthModule, MessageModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
