// import { Router } from 'express';
// import { getAllProjects } from './services/ProjectsService';
// import {
// 	createProjectController,
// 	deleteProjectByIdController,
// 	getAllProjectsController,
// 	getProjectByIdController,
// 	updateProjectController,
// } from './controllers/ProjectsController';
// import authenticateFacade from '../authFacade';
// import { setHeaders } from '../lib/HeadersSetter';

// const router = Router();

// router.all('*', async (req, res, next) => {
// 	try {
// 		// Set headers for all responses
// 		setHeaders(req, res);

// 		// Extract the HTTP method and URL path
// 		const { method, url } = req;

// 		// Handle GET requests
// 		if (method === 'GET') {
// 			if (url === '/projects') {
// 				// GET all projects
// 				await getAllProjectsController(req, res);
// 			} else if (url.startsWith('/projects/')) {
// 				// GET project by ID
// 				await getProjectByIdController(req, res);
// 			} else {
// 				// Unknown route
// 				res.status(404).json({
// 					message: 'Route not found',
// 				});
// 			}
// 		}
// 		// Handle POST requests
// 		else if (method === 'POST' && url === '/projects') {
// 			// Authenticate and create project
// 			authenticateFacade(req, res, () => {
// 				createProjectController(req, res);
// 			});
// 		}
// 		// Handle PUT requests
// 		else if (method === 'PUT' && url.startsWith('/projects/')) {
// 			// Authenticate and update project
// 			authenticateFacade(req, res, () => {
// 				updateProjectController(req, res);
// 			});
// 		}
// 		// Handle DELETE requests
// 		else if (method === 'DELETE' && url.startsWith('/projects/')) {
// 			// Authenticate and delete project
// 			authenticateFacade(req, res, () => {
// 				deleteProjectByIdController(req, res);
// 			});
// 		}
// 		// Handle unsupported methods or routes
// 		else {
// 			res.status(405).json({ message: 'Method not allowed' });
// 		}
// 	} catch (error) {
// 		// Handle errors
// 		console.error(error);
// 		res.status(500).json({ message: 'Internal server error' });
// 	}
// });

// export default router;
