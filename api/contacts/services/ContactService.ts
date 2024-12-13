import { PrismaClient } from '@prisma/client';
import prisma from '../../db/PrismaDb';

export async function getAllContacts() {
	return await prisma.contact.findMany();
}

export async function getContactById(id) {
	return await prisma.contact.findUnique({ where: { id: id } });
}

export async function createContact(contact) {
	await prisma.contact.create({
		data: {
			platformName: contact.platformName,
			platformUserPageLink: contact.platformUserPageLink,
			email: contact.email,
		},
	});
}

export async function deleteContactById(id) {
	await prisma.contact.delete({ where: { id: id } });
}
