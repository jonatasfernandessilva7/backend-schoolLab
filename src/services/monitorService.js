import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class MonitorService{
    async buscaMonitor(email) {
        let userFind = await prisma.monitores.findUnique({
            where: {
                email
            }
        });
        return userFind;
    }
}

module.exports = MonitorService