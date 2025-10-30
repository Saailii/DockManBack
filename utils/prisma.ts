import ApiError from '../classes/ApiErrors.js'
import { PrismaClient } from './generated/prisma'

let prisma: PrismaClient | null = null;

function getDB(): PrismaClient {

    if (!prisma) {
        prisma = new PrismaClient()
    }

    return prisma

}



