require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';
import cookie from 'cookie'; // Import the cookie library

const middleware = async (req, res: Response, next: NextFunction) => {
	console.log('header ' + req.header);
	console.log('token recebido - ' + req.headers.cookie);
	const session = getCookie(await req.headers.cookie);

	console.log('token - ' + session);
	const isAuthorized = await authenticateController(session);
	if (isAuthorized) {
		res.set(
			'Access-Control-Allow-Origin',
			'https://dev-web-site-front-production.up.railway.app',
		); // Frontend domain
		res.set('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
		res.set(
			'Access-Control-Allow-Methods',
			'GET, POST, PUT, DELETE, OPTIONS',
		); // Allow methods
		res.set(
			'Access-Control-Allow-Headers',
			'Content-Type, Authorization',
		); // Allow these headers in requests

		res.set('Accept', 'application/json');
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
