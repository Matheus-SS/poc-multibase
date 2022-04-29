import { Field, ObjectType } from '@nestjs/graphql';
import { Configuracao } from 'src/persistence/connection/model/connection.model';
@ObjectType()
export class ConfiguracaoEntity {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  senha: string;
  @Field()
  host: string;
  @Field()
  porta: string;
  @Field()
  base: string;
}
