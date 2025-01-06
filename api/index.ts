import express, { Express, Request, Response } from 'express';
const app = express();
import cookieParser from 'cookie-parser';
app.use(cookieParser());
import authenticatFacade from './authFacade';
import projectsRouter from './projects/ProjectsRouter';
import blogsRouter from './blogs/BlogsRouter';
import aboutRouter from './about/AboutRouter';
import contactsRouter from './contacts/ContactsRouter';
import competencesRouter from './competences/CompetencesRouter';
import messageRouter from './messages/MessageRouter';
import authRouter from './admin/AuthRouter';
require('dotenv').config();
import 'dotenv';
import cors from 'cors';
import { setHeaders } from './lib/HeadersSetter';

app.get('/api', async (req, res, next) => {
	next();
});
app.options('/api', async (req, res, next) => {
	next();
});
app.post('/api', async (req, res, next) => {
	await authenticatFacade(req, res, next);
});
app.delete('/api', async (req, res, next) => {
	await authenticatFacade(req, res, next);
});
app.put('/api', async (req, res, next) => {
	await authenticatFacade(req, res, next);
});

app.use(express.json());
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
		allowedHeaders: [
			'Content-Type',
			'Authorization',
			'cookie',
			'Set-Cookie',
		],
		credentials: true,
	}),
);

app.use('/api/projects', projectsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/competences', competencesRouter);
app.use('/api/messages', messageRouter);
app.use('/login', authRouter);

app.get('/toggle', (req, res, next) => {
	res.sendStatus(200);
});
app.listen(3000, '::', () => {
	console.log('on');
});

export default app;
