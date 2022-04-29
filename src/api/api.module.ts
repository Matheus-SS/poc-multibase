import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CatsModule } from 'src/old-connection/cat.module';
import { ConnectionModule } from 'src/persistence/connection/connection.module';
import { PersistenceModule } from 'src/persistence/persistence.module';
import { CatsResolver } from './cats/cats.resolver';

@Module({
  imports: [DatabaseModule, PersistenceModule],
  providers: [CatsResolver],
})
export class ApiModule {}
