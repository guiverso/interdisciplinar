import { defineConfig, env } from "prisma/config";
import "dotenv/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasources: {
    db: {
      url: env("DATABASE_URL"),
    },
  },
});
