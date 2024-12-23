require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';
import { setHeaders } from './lib/HeadersSetter';

const authenticatFacade = async (req, res, next) => {
	const cookies = await req.headers.cookies;
	console.log(cookies);
	const cookiesReq = await req.cookies;
	console.log(cookiesReq);
	setHeaders(req, res);
	(await authenticateController(getCookie('asf'))) && next();
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
	const session = listDict.filter((i) => i.key == 'Authorization')[0];
	if (session) {
		console.log('Session value:', session.value);
		return session.value;
	} else {
		console.log('Session cookie not found');
		return null;
	}
}
