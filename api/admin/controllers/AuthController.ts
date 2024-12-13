import { Request, Response } from 'express';
import { authenticate, login } from '../services/AuthService';

export async function loginController(req: Request, res: Response) {
	const user = req.body;
	const session = await login(user);
	console.log(JSON.stringify(session));
	if (session) {
		res.send(JSON.stringify(session));
	} else {
		res.sendStatus(403);
	}
}
export async function authenticateController(session) {
	const auth = await authenticate(session);
	return auth;
}
