import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';

const middleware = async (req: Request, res: Response, next: NextFunction) => {
	const session = await req.cookies['session'];
	console.log(session);
	if (await authenticateController(session)) {
		next();
	} else {
		res.sendStatus(403);
	}
};

export default middleware;