import { Module } from '@nestjs/common';
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
