// vercel.js (Entry point for Vercel)
import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { setHeaders } from './lib/HeadersSetter';
import authenticateFacade from './authFacade';

// Load environment variables
dotenv.config();

const app: Express = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(setHeaders); // Apply headers middleware to all routes

// CORS configuration
app.use(
	cors({
		origin: process.env.FRONTEND_URL, // Allow requests from the frontend URL
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'], // Allowed HTTP methods
		allowedHeaders: [
			'Content-Type',
			'Authorization',
			'cookie',
			'Set-Cookie',
		], // Allowed headers
		credentials: true, // Allow credentials (cookies, authorization headers)
	}),
);

// Handle all routes and methods using app.all
app.all('*', async (req: Request, res: Response) => {
	try {
		const { method, url } = req;

		// Projects routes
		if (url.startsWith('/api/projects')) {
			const {
				getAllProjectsController,
				getProjectByIdController,
				createProjectController,
				updateProjectController,
				deleteProjectByIdController,
			} = await import(
				'./projects/controllers/ProjectsController'
			);
			if (method === 'GET' && url === '/api/projects') {
				await getAllProjectsController(req, res);
			} else if (
				method === 'GET' &&
				url.startsWith('/api/projects/')
			) {
				await getProjectByIdController(req, res);
			} else if (
				method === 'POST' &&
				url === '/api/projects'
			) {
				authenticateFacade(req, res, () => {
					createProjectController(req, res);
				});
			} else if (
				method === 'PUT' &&
				url.startsWith('/api/projects/')
			) {
				authenticateFacade(req, res, () => {
					updateProjectController(req, res);
				});
			} else if (
				method === 'DELETE' &&
				url.startsWith('/api/projects/')
			) {
				authenticateFacade(req, res, () => {
					deleteProjectByIdController(req, res);
				});
			} else {
				res.status(405).json({
					message: 'Method not allowed',
				});
			}
		}
		// Blogs routes
		else if (url.startsWith('/api/blogs')) {
			const {
				getAllBlogsController,
				getBlogByIdController,
				createBlogController,
				updateBlogController,
				deleteBlogByIdController,
			} = await import('./blogs/controllers/BlogsController');
			if (method === 'GET' && url === '/api/blogs') {
				await getAllBlogsController(req, res);
			} else if (
				method === 'GET' &&
				url.startsWith('/api/blogs/')
			) {
				await getBlogByIdController(req, res);
			} else if (method === 'POST' && url === '/api/blogs') {
				authenticateFacade(req, res, () => {
					createBlogController(req, res);
				});
			} else if (
				method === 'PUT' &&
				url.startsWith('/api/blogs/')
			) {
				authenticateFacade(req, res, () => {
					updateBlogController(req, res);
				});
			} else if (
				method === 'DELETE' &&
				url.startsWith('/api/blogs/')
			) {
				authenticateFacade(req, res, () => {
					deleteBlogByIdController(req, res);
				});
			} else {
				res.status(405).json({
					message: 'Method not allowed',
				});
			}
		}
		// Contacts routes
		else if (url.startsWith('/api/contacts')) {
			const {
				getAllContactsController,
				getContactByIdController,
				createContactController,
				deleteContactByIdController,
			} = await import(
				'./contacts/controllers/ContactControllers'
			);
			if (method === 'GET' && url === '/api/contacts') {
				await getAllContactsController(req, res);
			} else if (
				method === 'GET' &&
				url.startsWith('/api/contacts/')
			) {
				await getContactByIdController(req, res);
			} else if (
				method === 'POST' &&
				url === '/api/contacts'
			) {
				authenticateFacade(req, res, () => {
					createContactController(req, res);
				});
			} else if (
				method === 'DELETE' &&
				url.startsWith('/api/contacts/')
			) {
				authenticateFacade(req, res, () => {
					deleteContactByIdController(req, res);
				});
			} else {
				res.status(405).json({
					message: 'Method not allowed',
				});
			}
		}
		// Competences routes
		else if (url.startsWith('/api/competences')) {
			const {
				getAllCompetencesController,
				getCompetenceByIdController,
				createCompetenceController,
				deleteCompetenceByIdController,
			} = await import(
				'./competences/controllers/CompetencesController'
			);
			if (method === 'GET' && url === '/api/competences') {
				await getAllCompetencesController(req, res);
			} else if (
				method === 'GET' &&
				url.startsWith('/api/competences/')
			) {
				await getCompetenceByIdController(req, res);
			} else if (
				method === 'POST' &&
				url === '/api/competences'
			) {
				authenticateFacade(req, res, () => {
					createCompetenceController(req, res);
				});
			} else if (
				method === 'DELETE' &&
				url.startsWith('/api/competences/')
			) {
				authenticateFacade(req, res, () => {
					deleteCompetenceByIdController(
						req,
						res,
					);
				});
			} else {
				res.status(405).json({
					message: 'Method not allowed',
				});
			}
		}
		// Messages routes
		else if (url.startsWith('/api/messages')) {
			const {
				getAllMessagesController,
				getMessageByIdController,
				storeMessageController,
				deleteMessageByIdController,
			} = await import(
				'./messages/controller/MessageController'
			);
			if (method === 'GET' && url === '/api/messages') {
				await getAllMessagesController(req, res);
			} else if (
				method === 'GET' &&
				url.startsWith('/api/messages/')
			) {
				await getMessageByIdController(req, res);
			} else if (
				method === 'POST' &&
				url === '/api/messages'
			) {
				await storeMessageController(req, res);
			} else if (
				method === 'DELETE' &&
				url.startsWith('/api/messages/')
			) {
				authenticateFacade(req, res, () => {
					deleteMessageByIdController(req, res);
				});
			} else {
				res.status(405).json({
					message: 'Method not allowed',
				});
			}
		}
		// Login route
		else if (url === '/login' && method === 'POST') {
			// Handle login logic here
			res.status(200).json({ message: 'Login successful' });
		}
		// Test route
		else if (url === '/toggle' && method === 'GET') {
			res.sendStatus(200);
		}
		// Unknown route
		else {
			res.status(404).json({ message: 'Route not found' });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

// Export the app for Vercel
export default app;
