import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Appointment } from './appointment';

@ObjectType()
export class Customer {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field(() => [Appointment])
  appointments: Appointment[];
}