import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from './graphql/graphql.module';

@Module({
  imports: [ConfigModule.forRoot(), GraphQLModule, ApiModule],
})
export class AppModule {}
