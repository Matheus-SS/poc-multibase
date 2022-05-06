import { Module } from '@nestjs/common';
import { GetHeaderModule } from 'src/interceptor/getHeader.module';
import { GetHeader } from 'src/interceptor/getHeader.service';
import { DatabaseService } from './database.service';

@Module({
  providers: [
    {
      provide: 'CONNECTION',
      useClass: DatabaseService,
    },
  ],
  exports: [
    {
      provide: 'CONNECTION',
      useClass: DatabaseService,
    },
  ],
})
export class DatabaseModule {}
