import { sql } from "drizzle-orm";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  grade: integer().notNull(),
  roles: varchar({ length: 255 })
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
});
