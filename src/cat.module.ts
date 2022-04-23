import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatController } from './cat.controller';
import { Cats } from './cat.entity';
import { CatsService } from './cat.service';
import { ConnectionModule } from './connection.module';

@Module({
  imports: [SequelizeModule.forFeature([Cats]), ConnectionModule],
  controllers: [CatController],
  providers: [CatsService],
})
export class CatsModule {}
