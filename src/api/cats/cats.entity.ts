import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class CatsEntity {
  @Field({ nullable: true })
  id: string;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  age: string;
  @Field({ nullable: true })
  breed: string;
}
