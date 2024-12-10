import { Request, Response } from 'express';
import {
	deleteMessageById,
	getAllMessages,
	getMessageById,
	storeMessage,
	updateMessage,
} from '../service/MessagesService';

export async function storeMessageController(req: Request, res: Response) {
	await storeMessage(req.body);
	res.sendStatus(200);
}
export async function getAllMessagesController(req: Request, res: Response) {
	const messages = await getAllMessages();
	res.send(messages);
}
export async function getMessageByIdController(req: Request, res: Response) {
	const { id } = req.params;
	const message = await getMessageById(Number.parseInt(id));
	res.send(message);
}
export async function updateMessageController(req: Request, res: Response) {
	const { id } = req.params;
	await updateMessage(Number.parseInt(id));
	res.sendStatus(200);
}

export async function deleteMessageByIdController(req: Request, res: Response) {
	const { id } = req.params;
	await deleteMessageById(id);
	res.sendStatus(200);
}
