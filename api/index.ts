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

app.all('/login', (req, res, next) => {
	setHeaders(res);
	authRouter(req, res, next);
});

app.all('/api/competences', (req, res, next) => {
	setHeaders(res);
	if (req.method == 'GET') {
		middleware(req, res, next);
	} else {
		competencesRouter(req, res, next);
	}
});
app.all('/api/blogs', (req, res, next) => {
	setHeaders(res);
	if (req.method == 'GET') {
		middleware(req, res, next);
	} else {
		blogsRouter(req, res, next);
	}
});
app.all('/api/about', (req, res, next) => {
	setHeaders(res);
	if (req.method == 'GET') {
		middleware(req, res, next);
	} else {
		aboutRouter(req, res, next);
	}
});
app.all('/api/contacts', (req, res, next) => {
	setHeaders(res);
	if (req.method == 'GET') {
		middleware(req, res, next);
	} else {
		contactsRouter(req, res, next);
	}
});
app.all('/api/projects', (req, res, next) => {
	setHeaders(res);
	if (req.method == 'GET') {
		middleware(req, res, next);
	} else {
		projectsRouter(req, res, next);
	}
});
app.all('/api/messages', (req, res, next) => {
	setHeaders(res);
	if (req.method == 'GET') {
		middleware(req, res, next);
	} else {
		messageRouter(req, res, next);
	}
});

function setHeaders(res) {
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
}
app.listen(3000, '::', () => {
	console.log('on');
});

export default app;
