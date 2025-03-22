import { Router } from 'express';
import {
	getAllMessagesController,
	deleteMessageByIdController,
	getMessageByIdController,
	storeMessageController,
	updateMessageController,
} from './controller/MessageController';
import authenticateFacade from '../authFacade';

const router = Router();

// Handle all routes and methods using router.all
router.all('*', async (req, res, next) => {
	try {
		// Extract the HTTP method and URL path
		const { method, url } = req;

		// Handle GET requests
		if (method === 'GET') {
			if (url === '/messages') {
				// GET all messages
				await getAllMessagesController(req, res);
			} else if (url.startsWith('/messages/')) {
				// GET message by ID
				await getMessageByIdController(req, res);
			} else {
				// Unknown route
				res.status(404).json({
					message: 'Route not found',
				});
			}
		}
		// Handle POST requests
		else if (method === 'POST' && url === '/messages') {
			// Authenticate and store a new message
			authenticateFacade(req, res, () => {
				storeMessageController(req, res);
			});
		}
		// Handle PUT requests
		else if (method === 'PUT' && url.startsWith('/messages/')) {
			// Authenticate and update message
			authenticateFacade(req, res, () => {
				updateMessageController(req, res);
			});
		}
		// Handle DELETE requests
		else if (method === 'DELETE' && url.startsWith('/messages/')) {
			// Authenticate and delete message
			authenticateFacade(req, res, () => {
				deleteMessageByIdController(req, res);
			});
		}
		// Handle unsupported methods or routes
		else {
			res.status(405).json({ message: 'Method not allowed' });
		}
	} catch (error) {
		// Handle errors
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

export default router;
