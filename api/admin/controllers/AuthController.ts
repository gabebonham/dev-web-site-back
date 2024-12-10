import { Request, Response } from 'express';
import { authenticate, login } from '../services/AuthService';

export async function loginController(req: Request, res: Response) {
	const user = req.body;
	const session = await login(user);
	const j = JSON.stringify({ session: session });
	console.log(j);
	if (session) {
		res.send(j);
	} else {
		res.sendStatus(403);
	}
}
export async function authenticateController(session) {
	const auth = await authenticate(session);
	if (auth) {
		return session;
	} else {
		return null;
	}
}
