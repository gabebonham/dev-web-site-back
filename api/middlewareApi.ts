import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';

const middleware = async (req: Request, res: Response, next: NextFunction) => {
	const session = await req.cookies['session'];
	console.log('token recebido - ' + session);
	const isAuthorized = await authenticateController(session);
	if (isAuthorized) {
		next();
	} else {
		res.sendStatus(403);
	}
};

export default middleware;
