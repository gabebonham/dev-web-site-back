import { PrismaClient } from '@prisma/client';
import Contact from '../models/ContactModel';
const prisma = new PrismaClient();

export async function getAllContacts() {
	return await prisma.contacts.findMany();
}

export async function getContactById(id) {
	return await prisma.contacts.findUnique({ where: { id: id } });
}

export async function createContact(contact: Contact) {
	await prisma.contacts.create({
		data: {
			platform_name: contact.platformName,
			platform_user_page_link: contact.platformUserPageLink,
			email: contact.email,
		},
	});
}

export async function deleteContactById(id) {
	await prisma.contacts.delete({ where: { id: id } });
}
