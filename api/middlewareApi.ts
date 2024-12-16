require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';
import cookie from 'cookie'; // Import the cookie library

const middleware = async (req, res, next: NextFunction) => {
	const session = getCookie(req.headers.cookie);

	console.log('token recebido - ' + session);
	const isAuthorized = await authenticateController(session);
	if (isAuthorized) {
		next();
	} else {
		res.sendStatus(403);
	}
};

export default middleware;

function getCookie(value) {
	const list = value.split(';');
	console.log(list);
	const listDict = list.map((i) => {
		const newList = i.split('=');
		return { key: newList[0], value: newList[1] };
	});
	const session = listDict.filter((i) => i.key == 'session')[0];
	console.log(session.value);
	return session.value;
}
