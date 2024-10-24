import { drizzle } from "drizzle-orm/neon-http";

class Database {
  constructor(public database = drizzle(process.env.DATABASE_URL!)) {}
}

export { Database };
