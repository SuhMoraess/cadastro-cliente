import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

class ListCustomersService{
    async execute(){
        const customers = await prismaClient.customer.findMany()

        return customers;
    }

}

export { ListCustomersService}