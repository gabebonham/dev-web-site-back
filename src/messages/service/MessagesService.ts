import { PrismaClient } from '@prisma/client';
import { Resend } from 'resend';
import Message from '../models/MessageModel';

const prisma = new PrismaClient();

export async function getAllMessages() {
	return await prisma.messages.findMany();
}

export async function getMessageById(id) {
	return await prisma.messages.findUnique({ where: { id: id } });
}

export async function storeMessage(message) {
	await prisma.messages.create({
		data: {
			msg: message.msg,
			email: message.email,
			scheduled: message.scheduled,
		},
	});
}

export async function deleteMessageById(id) {
	await prisma.messages.delete({ where: { id: id } });
}
export async function updateMessage(id) {
	const message = (await getMessageById(id)) as Message;
	message.isNew = false;
	await prisma.messages.update({
		where: { id: id },
		data: message,
	});
}
