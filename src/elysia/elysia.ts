import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { usersRoute } from "./module/users/users.route";

const elysia = new Elysia({ prefix: "/api" })
  .use(swagger())
  .use(usersRoute)
  .get("/", () => {
    return { message: "Hello Next & Elysia!" };
  });

export { elysia };
