require('dotenv').config();
import 'dotenv';
import express, { Express, Request, Response } from 'express';
import authenticatFacade from './authFacade';
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

app.listen(3000, '::', () => {
	console.log('on');
});

export default app;
