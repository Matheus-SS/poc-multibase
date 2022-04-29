import { Module } from '@nestjs/common';
import { GraphqlService } from './graphql.service';

@Module({
  imports: [GraphqlService.forRoot()],
})
export class GraphQLModule {}
