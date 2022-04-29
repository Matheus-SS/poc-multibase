import { Module } from '@nestjs/common';
import { CatsModule } from './cats/repository/cats.module';
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [ConnectionModule, CatsModule],
  exports: [ConnectionModule, CatsModule],
})
export class PersistenceModule {}
