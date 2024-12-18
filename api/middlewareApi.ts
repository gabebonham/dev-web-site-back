require('dotenv').config();
import 'dotenv';
import { NextFunction, Request, Response } from 'express';
import { authenticateController } from './admin/controllers/AuthController';
import cookieParser from 'cookie-parser';
import cookie from 'cookie'; // Import the cookie library

const middleware = async (req, res: Response, next: NextFunction) => {
	console.log(
		'token recebido headers - ' + JSON.parse(req.headers.cookie),
	);
	console.log('token recebido cookies - ' + JSON.parse(req.cookies));
	console.log(process.env.DATABASE_URL);
	const session = getCookie(await req.headers.cookie);

	console.log('token - ' + session);
	const isAuthorized = await authenticateController(session);
	if (isAuthorized) {
		res.setHeader(
			'Access-Control-Allow-Origin',
			'https://dev-web-site-front-production.up.railway.app',
		); // Frontend domain
		res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
		res.setHeader(
			'Access-Control-Allow-Methods',
			'GET, POST, PUT, DELETE, OPTIONS,PATCH',
		); // Allow methods
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers in requests

		res.setHeader('Accept', 'application/json');
		return next();
	} else {
		res.sendStatus(403);
	}
};

export default middleware;

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
