import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomersController } from "./controllers/ListCustomersContoller";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste", async( request: FastifyRequest, replay: FastifyReply) => {
        return { ok: true}
    })

    fastify.post("/customer", async (resquest: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(resquest, reply)
    })

    fastify.get("/customers", async (resquest: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(resquest, reply)
    })

    fastify.delete("/customer", async (resquest: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(resquest, reply)
    })
}

