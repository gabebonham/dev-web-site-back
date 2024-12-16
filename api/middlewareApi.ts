require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';
import cookie from 'cookie'; // Import the cookie library

const middleware = async (req: Request, res: Response, next: NextFunction) => {
	const cookies = req.headers.cookie
		? cookie.parse(req.headers.cookie)
		: {};

	// Access the 'session' cookie from the parsed object
	const session = cookies.session;

	console.log('token recebido - ' + session);
	const isAuthorized = await authenticateController(session);
	if (isAuthorized) {
		next();
	} else {
		res.sendStatus(403);
	}
};

export default middleware;
