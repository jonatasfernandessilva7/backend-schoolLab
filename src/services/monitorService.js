import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function buscaMonitor(email) {
    let userFind = await prisma.monitores.findUnique({
        where: {
            email
        }
    });
    return userFind;
}

module.exports = {
    buscaMonitor,
}