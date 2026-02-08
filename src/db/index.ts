import "server-only";

/**
 * This module will be executed:
 * - potentially multiple times
 * - across requests
 * - during development reloads
 *
 * It must be safe to import repeatedly.
 *
 * Prisma Client MUST NOT be instantiated blindly.
 * Duplicate clients = duplicate connection pools.
 */

import { PrismaClient } from "@/src/generated/prisma/client";
const globalForPrisma = global as unknown as { prisma?: PrismaClient };
export const prisma = globalForPrisma.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
