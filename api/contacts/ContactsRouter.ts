import { Router } from 'express';
import {
	getAllContactsController,
	createContactController,
	deleteContactByIdController,
	getContactByIdController,
} from './controllers/ContactControllers';
import { setHeaders } from '../lib/HeadersSetter';
import authenticatFacade from '../authFacade';

const router = Router();

router.get('', async (req, res, next) => {
	setHeaders(req, res);
	getAllContactsController(req, res);
});
router.get('/:id', async (req, res, next) => {
	setHeaders(req, res);
	getContactByIdController(req, res);
});
router.post('', async (req, res, next) => {
	setHeaders(req, res);
	(await authenticatFacade(req, res, next)) &&
		createContactController(req, res);
});
router.delete('/:id', async (req, res, next) => {
	setHeaders(req, res);
	(await authenticatFacade(req, res, next)) &&
		deleteContactByIdController(req, res);
});

export default router;
