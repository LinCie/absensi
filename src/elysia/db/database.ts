import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const database = drizzle(process.env.DATABASE_URL!, { schema });

export { database };
