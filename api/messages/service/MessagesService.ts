import { PrismaClient } from '@prisma/client';
import Message from '../models/MessageModel';
import prisma from '../../db/PrismaDb';

export async function getAllMessages() {
	return await prisma.message.findMany();
}

export async function getMessageById(id) {
	return await prisma.message.findUnique({ where: { id: id } });
}

export async function storeMessage(message) {
	await prisma.message.create({
		data: {
			msg: message.msg,
			email: message.email,
			scheduled: message.scheduled,
		},
	});
}

export async function deleteMessageById(id) {
	await prisma.message.delete({ where: { id: id } });
}
export async function updateMessage(id) {
	const message = (await getMessageById(id)) as Message;
	message.isNew = false;
	await prisma.message.update({
		where: { id: id },
		data: message,
	});
}
