import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const elysia = new Elysia({ prefix: "/api" }).use(swagger()).get("/", () => {
  return { message: "Hello Next & Elysia!" };
});

export { elysia };
