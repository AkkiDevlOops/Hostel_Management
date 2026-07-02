import { PrismaClient } from "@prisma/client"; // to import prisma database client


const globalForPrisma = globalThis;

//This accesses Node.js global memory.
const prisma =
  globalForPrisma.prisma ||
  new PrismaClient(); // creating a prisma instance instead of writing code againand again



// If Prisma connection already exists
// → reuse it (cuz nextjs reloads constantly )

// Otherwise
// → create new Prisma connection

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;