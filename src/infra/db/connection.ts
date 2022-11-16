import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class PrismaConnect {
	static connect() {
		prisma.$connect();
	}
}
