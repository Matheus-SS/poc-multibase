import { Module } from '@nestjs/common';
import { GetHeader } from './getHeader.service';

@Module({
  providers: [
    {
      provide: 'GET_HEADER',
      useClass: GetHeader,
    },
  ],
  exports: [
    {
      provide: 'GET_HEADER',
      useClass: GetHeader,
    },
  ],
})
export class GetHeaderModule {}
