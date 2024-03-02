import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import JwtModuleConfig from 'src/configs/JwtModuleConfig';
import { DatabaseModule } from './DatabaseModule';
import { MessageModule } from './MessageModule';
import { AuthModule } from './auth/AuthModule';
import { TaskListModule } from './lists/TaskListModule';
import { TaskModule } from './tasks/TaskModule';

@Module({
  imports: [ConfigModule.forRoot(), JwtModule.register(JwtModuleConfig), DatabaseModule, AuthModule, MessageModule, TaskModule, TaskListModule],
})
export class AppModule {}
