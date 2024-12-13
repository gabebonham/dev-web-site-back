'use server';
import { PrismaClient } from '@prisma/client';
import prisma from '../../db/PrismaDb';

export async function getAbout() {
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
