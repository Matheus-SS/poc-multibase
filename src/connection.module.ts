import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatController } from './cat.controller';
import { Cats } from './cat.entity';
import { CatsService } from './cat.service';
import { Configuracao } from './connection.entity';
import { ConfiguracaoService } from './connection.service';

@Module({
  imports: [SequelizeModule.forFeature([Configuracao])],
  providers: [ConfiguracaoService],
  exports: [ConfiguracaoService],
})
export class ConnectionModule {}
