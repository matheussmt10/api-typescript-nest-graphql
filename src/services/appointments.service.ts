import { Injectable } from "@nestjs/common";
import { Appointment as AppointmentModel } from "@prisma/client";
import { PrismaService } from "src/database/prisma/prisma.service";


interface ICreateAppointment {
    customerId: string,
    startAt: Date,
    endAt: Date,
}
@Injectable()
export class AppointmentsService {
    
    constructor(private prismaService: PrismaService) {}

    async createAppointment(appointment: ICreateAppointment): Promise<AppointmentModel> {
        return this.prismaService.appointment.create({
            data: appointment
        })  
    }    
    
    async findAppointments(): Promise<Array<AppointmentModel>> {
        return  this.prismaService.appointment.findMany()
    }
    async findAllFromCustomer(customerId: string): Promise<Array<AppointmentModel>> {
        return await this.prismaService.appointment.findMany({
            where: {
                customerId
            },
            orderBy: {
                startAt: 'desc'
            }
        })
    }

}