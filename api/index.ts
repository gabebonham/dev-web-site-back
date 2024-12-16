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
import cors from 'cors';
import { hash } from './admin/lib/JWT';

const app: Express = express();

app.use(cookieParser());
app.use(
	cors({
		origin: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type'],
		credentials: true,
	}),
);
app.use(express.json());
app.use('/api/*', (req, res, next) => {
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

app.listen(3000, '::', () => {
	console.log('on');
});

module.exports = app;
