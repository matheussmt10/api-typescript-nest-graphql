import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Customer } from "../models/customer";
import { CreateCustomerInput } from "../inputs/create-customer-input";
import { CustomersService } from "src/services/customers.service";
import { AppointmentsService } from "src/services/appointments.service";

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private customersService: CustomersService,
    private appointmentsService: AppointmentsService,
  ) {}

  @Query(()=> [Customer])
  customers() {
    return this.customersService.findCustomers()
  }

  @ResolveField()
  appointments(@Parent() customer: Customer) {
    return this.appointmentsService.findAllFromCustomer(customer.id);
  }
  @Mutation(() => Customer)
  async createCustomer(@Args('data') data: CreateCustomerInput) {
    return this.customersService.createCustomer(data);
  }
}