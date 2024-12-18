require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';
import cookie from 'cookie'; // Import the cookie library

const authenticatFacade = async (req: Request, res: Response, next, route) => {
	console.log('token recebido cookies - ' + req.cookies['session']);
	console.log(process.env.DATABASE_URL);
	const session = getCookie(await req.cookies['session']);

	console.log('token - ' + session);
	const isAuthorized = await authenticateController(session);
	isAuthorized ? route(req, res, next) : null;
};

export default authenticatFacade;

function getCookie(value) {
	if (!value) {
		console.log('No cookies found');
		return null;
	}
	const list = value.split(';');
	const listDict = list.map((i) => {
		const newList = i.split('=');
		return { key: newList[0], value: newList[1] };
	});
	const session = listDict.filter((i) => i.key == 'session')[0];
	if (session) {
		console.log('Session value:', session.value);
		return session.value;
	} else {
		console.log('Session cookie not found');
		return null;
	}
}
