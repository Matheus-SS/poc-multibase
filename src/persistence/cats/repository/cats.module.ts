import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { GetHeaderModule } from 'src/interceptor/getHeader.module';
import { catsProviders } from '../model/cats.model.provider';
import { CatsRepository } from './cats.repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...catsProviders,
    {
      provide: 'CatsRepo',
      useClass: CatsRepository,
    },
  ],
  exports: [
    {
      provide: 'CatsRepo',
      useClass: CatsRepository,
    },
  ],
})
export class CatsModule {}
