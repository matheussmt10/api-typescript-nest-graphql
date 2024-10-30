import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Customer } from './customer';

@ObjectType()
export class Appointment {
  @Field(type => ID)
  id: string;

  @Field()
  startAt: Date;

  @Field()
  endAt: Date;

  @Field(() => Customer)
  customer: Customer;

  customerId: string;
}