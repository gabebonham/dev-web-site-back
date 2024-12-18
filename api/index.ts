require('dotenv').config();
import 'dotenv';
import express, { Express, Request, Response } from 'express';
import authenticatFacade from './middlewareApi';
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

app.use('/api/projects', projectsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/competences', competencesRouter);
app.use('/api/messages', messageRouter);
app.use('/login', authRouter);

app.all('/api/blogs', (req, res, next) => {
	setHeaders(res);
	req.method == 'GET'
		? blogsRouter(req, res, next)
		: authenticatFacade(req, res, next, blogsRouter);
});
app.all('/api/projects', (req, res, next) => {
	setHeaders(res);
	req.method == 'GET'
		? projectsRouter(req, res, next)
		: authenticatFacade(req, res, next, projectsRouter);
});
app.all('/api/contacts', (req, res, next) => {
	setHeaders(res);
	req.method == 'GET'
		? contactsRouter(req, res, next)
		: authenticatFacade(req, res, next, contactsRouter);
});
app.all('/api/competences', (req, res, next) => {
	setHeaders(res);
	req.method == 'GET'
		? competencesRouter(req, res, next)
		: authenticatFacade(req, res, next, competencesRouter);
});
app.all('/api/about', (req, res, next) => {
	setHeaders(res);
	req.method == 'GET'
		? aboutRouter(req, res, next)
		: authenticatFacade(req, res, next, aboutRouter);
});
app.all('/api/messages', (req, res, next) => {
	setHeaders(res);
	req.method == 'GET'
		? messageRouter(req, res, next)
		: authenticatFacade(req, res, next, messageRouter);
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
