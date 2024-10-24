import { database } from "@/elysia/db/database";
import { usersTable as users } from "@/elysia/db/schema";
import { password } from "bun";
import { eq } from "drizzle-orm";
import { CreateUserDto, UpdateUserDto } from "./users.dto";

abstract class Users {
  static find(id: number) {
    return database.select().from(users).where(eq(users.id, id));
  }

  static findAll() {
    return database.select().from(users).limit(10);
  }

  static async create(user: CreateUserDto) {
    const hash = await password.hash(user.password);
    return database.insert(users).values({ ...user, hash });
  }

  static update(id: number, user: UpdateUserDto) {
    return database.update(users).set(user).where(eq(users.id, id));
  }

  static delete(id: number) {
    return database.delete(users).where(eq(users.id, id));
  }
}

export { Users };
