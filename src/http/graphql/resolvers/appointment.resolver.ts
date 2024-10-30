import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Customer } from "../models/customer";
import { CreateCustomerInput } from "../inputs/create-customer-input";
import { CustomersService } from "src/services/customers.service";
import { AppointmentsService } from "src/services/appointments.service";
import { Appointment } from "../models/appointment";
import { CreateAppointmentInput } from "../inputs/create-appointment-input";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  constructor(
    private customersService: CustomersService,
    private appointmentsService: AppointmentsService,
  ) {}

  @Query(()=> [Appointment])
  appointments() {
    return this.appointmentsService.findAppointments()
  }

  @ResolveField()
  customer(@Parent() appointment: Appointment) {
    return this.appointmentsService.findAllFromCustomer(appointment.id);
  }
  @Mutation(() => Appointment)
  async createAppointment(@Args('data') data: CreateAppointmentInput) {
    return this.appointmentsService.createAppointment(data);
  }
}