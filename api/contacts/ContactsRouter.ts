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

router.get('', getAllContactsController);
router.get('/:id', getContactByIdController);
router.post('', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	createContactController;
});
router.delete('/:id', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	deleteContactByIdController;
});

export default router;
