import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

export class GraphqlService {
  static forRoot() {
    return GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      introspection: true,
      context: ({ req, res }) => {
        return { req, res };
      },
    });
  }
}
