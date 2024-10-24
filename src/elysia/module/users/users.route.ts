import { Elysia } from "elysia";
import { createUserDto, updateUserDto } from "./users.dto";
import { Users } from "./users.service";

const usersRoute = new Elysia().group("/users", (app) =>
  app
    .get("/:id", ({ params: { id } }) => {
      return Users.find(Number(id));
    })
    .get("/", () => {
      return Users.findAll();
    })
    .post(
      "/",
      ({ body }) => {
        return Users.create(body);
      },
      { body: createUserDto },
    )
    .patch(
      "/:id",
      ({ params: { id }, body }) => {
        return Users.update(Number(id), body);
      },
      { body: updateUserDto },
    )
    .delete("/:id", ({ params: { id } }) => {
      return Users.delete(Number(id));
    }),
);

export { usersRoute };
