import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient();

export async function getAbout() {
	return await prismaClient.about.findFirst();
}

export async function updateAbout(newAbout) {
	await prismaClient.about.update({
		where: { id: 1 },
		data: { value: newAbout },
	});
}
