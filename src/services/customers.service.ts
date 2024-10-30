import { Injectable } from "@nestjs/common";
import { Customer as CustomerModel } from "@prisma/client";
import { PrismaService } from "src/database/prisma/prisma.service";


interface ICreateCustomer {
    name: string,
    email: string
}
@Injectable()
export class CustomersService {
    
    constructor(private prismaService: PrismaService) {}

    async createCustomer(customer: ICreateCustomer): Promise<CustomerModel> {
        return this.prismaService.customer.create({
            data: customer
        })  
    }    
    
    async findCustomers(): Promise<Array<CustomerModel>> {
        return await this.prismaService.customer.findMany()
    }

    async findAllFromCustomer(): Promise<Array<CustomerModel>> {
        return await this.prismaService.customer.findMany()
    }

}