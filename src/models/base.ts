import { prisma } from '../configs/db'

async function ensureDbConnection(): Promise<boolean> {
    let connection_success = false;

    try {
        await prisma.$queryRaw`SELECT 1`;
        connection_success = true;
    } catch (error) {
        connection_success = false;
        console.error("DB Connection failed:", error);
    }

    return connection_success;
}

export default ensureDbConnection;