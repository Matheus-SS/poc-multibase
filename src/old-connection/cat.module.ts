import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatController } from './cat.controller';
import { Cats } from './cat.entity';
import { CatsService } from './cat.service';
import { ConnectionModule } from './connection.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [CatsService],
})
export class CatsModule {}
