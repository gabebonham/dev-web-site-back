import express, { Express, Request, Response } from 'express';
const app: Express = express();
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

app.use(express.json());

app.use('/api/projects', projectsRouter);
app.use('/api/blogs', blogsRouter);
app.use('/api/about', aboutRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/competences', competencesRouter);
app.use('/api/messages', messageRouter);
app.use('/login', authRouter);

app.listen(3000, () => {
	console.log('on');
});

export default app;
