import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export async function getAbout() {
	return await prismaClient.about.findUnique({
		where: { id: 1 },
	});
}

export async function updateAbout(newAbout) {
	await prismaClient.about.update({
		where: { id: 1 },
		data: { value: newAbout },
	});
}
