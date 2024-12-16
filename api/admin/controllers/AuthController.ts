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
	console.log('auth controller');
	const auth = await authenticate(session);
	console.log('nops');
	return auth;
}
