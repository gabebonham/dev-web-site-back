require('dotenv').config();
import 'dotenv';
import express, { Express, Request, Response } from 'express';
import middleware from './middlewareApi';
import projectsRouter from './projects/ProjectsRouter';
import blogsRouter from './blogs/BlogsRouter';
import aboutRouter from './about/AboutRouter';
import contactsRouter from './contacts/ContactsRouter';
import competencesRouter from './competences/CompetencesRouter';
import messageRouter from './messages/MessageRouter';
import authRouter from './admin/AuthRouter';

const cookieParser = require('cookie-parser');
const cors = require('cors');
import { hash } from './admin/lib/JWT';
var corsOptions = {
	origin: 'https://dev-web-site-front-production.up.railway.app',
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
	allowedHeaders: ['Content-Type'],
	credentials: true,
};
const app: Express = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.all('/api/*', (req: Request, res: Response, next) => {
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://dev-web-site-front-production.up.railway.app',
	); // Frontend domain
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS, PATCH',
	); // Allow methods
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers in requests

	res.setHeader('Accept', 'application/json');
	if (req.method == 'POST') {
		// Apply middleware to all methods except GET

		return middleware(req, res, next);
	}
	if (req.method == 'DELETE') {
		// Apply middleware to all methods except GET

		return middleware(req, res, next);
	}
	if (req.method == 'PUT') {
		// Apply middleware to all methods except GET
		return middleware(req, res, next);
	}
	if (req.method == 'OPTIONS') {
		// Apply middleware to all methods except GET
		return middleware(req, res, next);
	}
	// Skip middleware for GET requests
	next();
});
app.use('/api/projects', projectsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/competences', competencesRouter);
app.use('/api/messages', messageRouter);
app.use('/login', authRouter);
app.options('*', (req, res) => {
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://dev-web-site-front-production.up.railway.app',
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS, PATCH',
	);
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.sendStatus(200); // Respond with status 200 OK
});
app.listen(3000, '::', () => {
	console.log('on');
});

module.exports = app;
