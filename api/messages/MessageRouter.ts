import { Router } from 'express';
import {
	getAllMessagesController,
	deleteMessageByIdController,
	getMessageByIdController,
	storeMessageController,
	updateMessageController,
} from './controller/MessageController';
import authenticatFacade from '../authFacade';
import { setHeaders } from '../lib/HeadersSetter';

const router = Router();

router.get('', async (req, res, next) => {
	setHeaders(res);
	getAllMessagesController(req, res);
});
router.get('/:id', async (req, res, next) => {
	setHeaders(res);
	getMessageByIdController(req, res);
});
router.post('', async (req, res, next) => {
	setHeaders(res);
	(await authenticatFacade(req, res, next)) &&
		storeMessageController(req, res);
});
router.put('/:id', async (req, res, next) => {
	setHeaders(res);
	(await authenticatFacade(req, res, next)) &&
		updateMessageController(req, res);
});
router.delete('/:id', async (req, res, next) => {
	setHeaders(res);
	(await authenticatFacade(req, res, next)) &&
		deleteMessageByIdController(req, res);
});
export default router;
