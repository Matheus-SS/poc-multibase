import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cats } from './cat.entity';
import { Configuracao } from './connection.entity';
import { databaseProviders } from './database.providers';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'conexaoDB',
      models: [],
    }),
  ],
})
export class DatabaseModule {}
