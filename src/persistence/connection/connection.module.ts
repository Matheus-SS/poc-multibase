import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ConnectionRepository } from './connection.repository';
import { Configuracao } from './model/connection.model';
import { configuracaoProviders } from './model/connection.model.provider';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...configuracaoProviders,
    {
      provide: 'ConnectionRepo',
      useClass: ConnectionRepository,
    },
  ],
  exports: [
    {
      provide: 'ConnectionRepo',
      useClass: ConnectionRepository,
    },
  ],
})
export class ConnectionModule {}
