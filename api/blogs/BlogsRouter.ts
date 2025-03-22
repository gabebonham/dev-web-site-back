// import { Router } from 'express';
// import {
// 	createBlogController,
// 	deleteBlogByIdController,
// 	getAllBlogsController,
// 	getBlogByIdController,
// 	updateBlogController,
// } from './controllers/BlogsController';
// import authenticateFacade from '../authFacade';
// import { setHeaders } from '../lib/HeadersSetter';

// const router = Router();

// // Apply headers middleware to all routes
// router.use(setHeaders);

// // Handle all routes and methods using router.all
// router.all('*', async (req, res, next) => {
// 	try {
// 		// Extract the HTTP method and URL path
// 		const { method, url } = req;

// 		// Handle GET requests
// 		if (method === 'GET') {
// 			if (url === '/blogs') {
// 				// GET all blogs
// 				await getAllBlogsController(req, res);
// 			} else if (url.startsWith('/blogs/')) {
// 				// GET blog by ID
// 				await getBlogByIdController(req, res);
// 			} else {
// 				// Unknown route
// 				res.status(404).json({
// 					message: 'Route not found',
// 				});
// 			}
// 		}
// 		// Handle POST requests
// 		else if (method === 'POST' && url === '/blogs') {
// 			// Authenticate and create a new blog
// 			authenticateFacade(req, res, () => {
// 				createBlogController(req, res);
// 			});
// 		}
// 		// Handle PUT requests
// 		else if (method === 'PUT' && url.startsWith('/blogs/')) {
// 			// Authenticate and update blog
// 			authenticateFacade(req, res, () => {
// 				updateBlogController(req, res);
// 			});
// 		}
// 		// Handle DELETE requests
// 		else if (method === 'DELETE' && url.startsWith('/blogs/')) {
// 			// Authenticate and delete blog
// 			authenticateFacade(req, res, () => {
// 				deleteBlogByIdController(req, res);
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
