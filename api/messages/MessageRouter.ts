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

router.get('', getAllMessagesController);
router.get('/:id', getMessageByIdController);
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
