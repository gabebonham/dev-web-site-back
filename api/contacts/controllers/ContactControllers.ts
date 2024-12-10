import { Request, Response } from 'express';
import {
	createContact,
	deleteContactById,
	getAllContacts,
	getContactById,
} from '../services/ContactService';

export async function getAllContactsController(req: Request, res: Response) {
	const conts = await getAllContacts();
	res.send(conts);
}

export async function getContactByIdController(req: Request, res: Response) {
	const body = req.body;
	const contact = await getContactById(body.id);
	res.send(contact);
}

export async function createContactController(req: Request, res: Response) {
	const contact = req.body;
	await createContact(contact);
	res.sendStatus(200);
}

export async function deleteContactByIdController(req: Request, res: Response) {
	const { id } = req.params;
	await deleteContactById(Number.parseInt(id));
	res.sendStatus(200);
}
