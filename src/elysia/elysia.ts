import { Elysia } from "elysia";

const elysia = new Elysia({ prefix: "/api" }).get("/", () => {
  return { message: "Hello Next & Elysia!" };
});

export { elysia };
