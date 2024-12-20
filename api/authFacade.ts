require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';

const authenticatFacade = async (req: Request, res: Response, next) => {
	const h = await req.headers;
	const cook = await h.authorization;
	const cop = await h.cookie;
	console.log(cop);
	console.log(cook);
	const isAuthorized = await authenticateController(cook);
	return isAuthorized;
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
	const session = listDict.filter((i) => i.key == 'authorization')[0];
	if (session) {
		console.log('Session value:', session.value);
		return session.value;
	} else {
		console.log('Session cookie not found');
		return null;
	}
}
