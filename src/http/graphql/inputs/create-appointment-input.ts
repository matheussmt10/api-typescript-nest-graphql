import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAppointmentInput {

  @Field()
  customerId: string;

  @Field()
  startAt: Date;

  @Field()
  endAt: Date;
}