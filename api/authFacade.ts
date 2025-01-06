require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';
import { setHeaders } from './lib/HeadersSetter';

const authenticateFacade = async (req, res, next) => {
	const cookies = await req.headers.cookie;
	console.log('authFacade cookies - ' + cookies);
	setHeaders(req, res);
	return await authenticateController(getCookie(cookies));
};

export function getCookie(value) {
	if (!value) {
		console.log('No cookies found');
		return null;
	}
	const list = value.split(';');
	console.log(list);
	const listDict = list.map((i) => {
		const newList = i.trim().split('=');
		return { key: newList[0], value: newList[1] };
	});
	const session = listDict.filter((i) => i.key == 'Authorization')[0];
	if (session) {
		console.log('Session value:', session.value);
		return session.value;
	} else {
		console.log('Session cookie not found');
		return null;
	}
}
export default authenticateFacade;
