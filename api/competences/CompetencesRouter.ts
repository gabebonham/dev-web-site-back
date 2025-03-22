// import { Router } from 'express';
// import {
// 	createCompetenceController,
// 	deleteCompetenceByIdController,
// 	getAllCompetencesController,
// 	getCompetenceByIdController,
// } from './controllers/CompetencesController';
// import authenticateFacade from '../authFacade';

// const router = Router();

// // Handle all routes and methods using router.all
// router.all('*', async (req, res, next) => {
// 	try {
// 		// Extract the HTTP method and URL path
// 		const { method, url } = req;

// 		// Handle GET requests
// 		if (method === 'GET') {
// 			if (url === '/competences') {
// 				// GET all competences
// 				await getAllCompetencesController(req, res);
// 			} else if (url.startsWith('/competences/')) {
// 				// GET competence by ID
// 				await getCompetenceByIdController(req, res);
// 			} else {
// 				// Unknown route
// 				res.status(404).json({
// 					message: 'Route not found',
// 				});
// 			}
// 		}
// 		// Handle POST requests
// 		else if (method === 'POST' && url === '/competences') {
// 			// Authenticate and create a new competence
// 			authenticateFacade(req, res, () => {
// 				createCompetenceController(req, res);
// 			});
// 		}
// 		// Handle DELETE requests
// 		else if (
// 			method === 'DELETE' &&
// 			url.startsWith('/competences/')
// 		) {
// 			// Authenticate and delete competence
// 			authenticateFacade(req, res, () => {
// 				deleteCompetenceByIdController(req, res);
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
