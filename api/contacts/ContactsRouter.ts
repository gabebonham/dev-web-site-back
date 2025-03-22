// import { Router } from 'express';
// import {
// 	getAllContactsController,
// 	createContactController,
// 	deleteContactByIdController,
// 	getContactByIdController,
// } from './controllers/ContactControllers';
// import authenticateFacade from '../authFacade';

// const router = Router();

// // Handle all routes and methods using router.all
// router.all('*', async (req, res, next) => {
// 	try {
// 		// Extract the HTTP method and URL path
// 		const { method, url } = req;

// 		// Handle GET requests
// 		if (method === 'GET') {
// 			if (url === '/contacts') {
// 				// GET all contacts
// 				await getAllContactsController(req, res);
// 			} else if (url.startsWith('/contacts/')) {
// 				// GET contact by ID
// 				await getContactByIdController(req, res);
// 			} else {
// 				// Unknown route
// 				res.status(404).json({
// 					message: 'Route not found',
// 				});
// 			}
// 		}
// 		// Handle POST requests
// 		else if (method === 'POST' && url === '/contacts') {
// 			// Authenticate and create a new contact
// 			authenticateFacade(req, res, () => {
// 				createContactController(req, res);
// 			});
// 		}
// 		// Handle DELETE requests
// 		else if (method === 'DELETE' && url.startsWith('/contacts/')) {
// 			// Authenticate and delete contact
// 			authenticateFacade(req, res, () => {
// 				deleteContactByIdController(req, res);
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
