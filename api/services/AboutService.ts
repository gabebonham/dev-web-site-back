import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function getAbout() {
	console.log('asdf');
	return await prisma.about.findUnique({
		where: { id: 1 },
	});
}

export async function updateAbout(newAbout) {
	await prisma.about.update({
		where: { id: 1 },
		data: { value: newAbout },
	});
}
