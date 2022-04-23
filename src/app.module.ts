import { Module } from '@nestjs/common';
import { CatsModule } from './cat.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, CatsModule],
})
export class AppModule {}
