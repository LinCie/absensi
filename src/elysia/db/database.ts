import { drizzle } from "drizzle-orm/neon-http";

const database = drizzle(process.env.DATABASE_URL!);

export { database };
