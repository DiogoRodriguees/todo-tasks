import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import DatabaseConfig from 'src/configs/DatabaseConfig';

@Module({ imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(DatabaseConfig)] })
export class DatabaseModule {}
