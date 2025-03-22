import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {
	getAllProjects,
	getProjectById,
	createProject,
	updateProject,
	deleteProjectById,
} from './services/ProjectsService';
import {
	getAllBlogs,
	getBlogById,
	createBlog,
	updateBlog,
	deleteBlogById,
} from './services/BlogsService';
import {
	getAllContacts,
	getContactById,
	createContact,
	deleteContactById,
} from './services/ContactService';
import {
	getAllCompetences,
	getCompetenceById,
	createCompetence,
	deleteCompetenceById,
} from './services/CompetencesService';
import {
	getAllMessages,
	getMessageById,
	storeMessage,
	deleteMessageById,
	updateMessage,
} from './services/MessagesService';
import { getAbout, updateAbout } from './services/AboutService';
import { setHeaders } from './lib/HeadersSetter';
import { authenticate, login } from './services/auth';

// Load environment variables
dotenv.config();

const app: Express = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(setHeaders); // Apply headers middleware to all routes

// CORS configuration
// app.use(
// 	cors({
// 		origin: process.env.FRONTEND_URL, // Allow requests from the frontend URL
// 		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Allowed HTTP methods
// 		allowedHeaders: [
// 			'Content-Type',
// 			'Authorization',
// 			'cookie',
// 			'Set-Cookie',
// 		], // Allowed headers
// 		credentials: true, // Allow credentials (cookies, authorization headers)
// 	}),
// );

// Login route
app.post('/login', async (req: Request, res: Response) => {
	await login(req, res);
});

// Projects routes
app.get('/api/projects', async (req: Request, res: Response) => {
	const projects = await getAllProjects();
	res.json(projects);
});

app.get('/api/projects/:id', async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const project = await getProjectById(id);
	res.json(project);
});

app.post('/api/projects', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	await createProject(req.body);
	res.status(201).json({ message: 'Project created' });
});

app.put('/api/projects/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	await updateProject(req.body);
	res.status(200).json({ message: 'Project updated' });
});

app.delete('/api/projects/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	const id = parseInt(req.params.id);
	await deleteProjectById(id);
	res.status(200).json({ message: 'Project deleted' });
});

// Blogs routes
app.get('/api/blogs', async (req: Request, res: Response) => {
	const blogs = await getAllBlogs();
	res.json(blogs);
});

app.get('/api/blogs/:id', async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const blog = await getBlogById(id);
	res.json(blog);
});

app.post('/api/blogs', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	await createBlog(req.body);
	res.status(201).json({ message: 'Blog created' });
});

app.put('/api/blogs/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	await updateBlog(req.body);
	res.status(200).json({ message: 'Blog updated' });
});

app.delete('/api/blogs/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	const id = parseInt(req.params.id);
	await deleteBlogById(id);
	res.status(200).json({ message: 'Blog deleted' });
});

// Contacts routes
app.get('/api/contacts', async (req: Request, res: Response) => {
	const contacts = await getAllContacts();
	res.json(contacts);
});

app.get('/api/contacts/:id', async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const contact = await getContactById(id);
	res.json(contact);
});

app.post('/api/contacts', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	await createContact(req.body);
	res.status(201).json({ message: 'Contact created' });
});

app.delete('/api/contacts/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	const id = parseInt(req.params.id);
	await deleteContactById(id);
	res.status(200).json({ message: 'Contact deleted' });
});

// Competences routes
app.get('/api/competences', async (req: Request, res: Response) => {
	const competences = await getAllCompetences();
	res.json(competences);
});

app.get('/api/competences/:id', async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const competence = await getCompetenceById(id);
	res.json(competence);
});

app.post('/api/competences', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	await createCompetence(req.body);
	res.status(201).json({ message: 'Competence created' });
});

app.delete('/api/competences/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	const id = parseInt(req.params.id);
	await deleteCompetenceById(id);
	res.status(200).json({ message: 'Competence deleted' });
});

// Messages routes
app.get('/api/messages', async (req: Request, res: Response) => {
	const messages = await getAllMessages();
	res.json(messages);
});

app.get('/api/messages/:id', async (req: Request, res: Response) => {
	const id = parseInt(req.params.id);
	const message = await getMessageById(id);
	res.json(message);
});

app.post('/api/messages', async (req: Request, res: Response) => {
	await storeMessage(req.body);
	res.status(201).json({ message: 'Message stored' });
});

app.delete('/api/messages/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	const id = parseInt(req.params.id);
	await deleteMessageById(id);
	res.status(200).json({ message: 'Message deleted' });
});

app.put('/api/messages/:id', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	const id = parseInt(req.params.id);
	await updateMessage(id);
	res.status(200).json({ message: 'Message updated' });
});

// About route
app.get('/api/about', async (req: Request, res: Response) => {
	console.log('lol');
	const about = await getAbout();
	res.json(about);
});

app.put('/api/about', async (req: Request, res: Response) => {
	const auth = await authenticate(req);
	if (!auth) {
		await res.status(401).json({ message: 'Unauthorized' });
	}
	await updateAbout(req.body);
	res.status(200).json({ message: 'About updated' });
});

// Test route
app.get('/toggle', (req: Request, res: Response) => {
	res.sendStatus(200);
});

app.listen(3000, () => {
	console.log(`Server is running`);
});

export default app;
