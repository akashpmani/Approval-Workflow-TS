import { PrismaClient } from '../prisma/generated/client';

const prisma = new PrismaClient();

async function ensureDbConnection(): Promise<boolean> {
    let connection_success = false;

    try {
        await prisma.$queryRaw`SELECT 1`;
        connection_success = true;
    } catch (error) {
        connection_success = false;
        console.error("DB Connection failed:", error);
    } finally {
        await prisma.$disconnect();
    }

    return connection_success;
}

export default ensureDbConnection;