import { prisma } from '../configs/db'

async function ensureDbConnection(): Promise<void> {
    try {
        await prisma.$connect();
        await prisma.$executeRaw`SELECT 1`; 
    } catch (error) {
        console.error("DB Connection failed:", error);
        throw error;
    }
}
export default ensureDbConnection;