import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import JwtModuleConfig from 'src/configs/JwtModuleConfig';
import { AuthModule } from './AuthModule';
import { DatabaseModule } from './DatabaseModule';
import { TaskListModule } from './ListModule';
import { MessageModule } from './MessageModule';
import { TaskModule } from './TaskModule';

@Module({
  imports: [ConfigModule.forRoot(), JwtModule.register(JwtModuleConfig), DatabaseModule, AuthModule, MessageModule, TaskModule, TaskListModule],
})
export class AppModule {}
