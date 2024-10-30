import {
    ApolloDriver,
    ApolloFederationDriver,
    ApolloFederationDriverConfig,
  } from '@nestjs/apollo';
  import { Module } from '@nestjs/common';
  import { ConfigModule } from '@nestjs/config';
  import { GraphQLModule } from '@nestjs/graphql';
  import * as path from 'node:path';
  
  import { DatabaseModule } from '../database/database.module';

  import { CustomersService } from '../services/customers.service';
import { CustomersResolver } from './graphql/resolvers/customer.resolver';
import { AppointmentsService } from 'src/services/appointments.service';
import { AppointmentsResolver } from './graphql/resolvers/appointment.resolver';

  
  @Module({
    imports: [
      ConfigModule.forRoot(),
      DatabaseModule,
      GraphQLModule.forRoot({
        driver: ApolloDriver,
        autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
      }),
    ],
    providers: [
    CustomersResolver,
    AppointmentsResolver,
      CustomersService,
      AppointmentsService
    ],
  })
  export class HttpModule {}