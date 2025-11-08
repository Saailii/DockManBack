import { PrismaBetterSQLite3 } from '@prisma/adapter-better-sqlite3';
import { PrismaClient } from '../generated/prisma/client.js';


let prisma: PrismaClient | null = null;

const adapter = new PrismaBetterSQLite3({
    url: "file:./prisma/src/database/database.db"
});

export function getDB(): PrismaClient {

    if (!prisma) {
        prisma = new PrismaClient({
            adapter
        })
    }

    return prisma

}



