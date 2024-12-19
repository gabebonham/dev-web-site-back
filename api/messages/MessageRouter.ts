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
router.post('', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	storeMessageController;
});
router.put('/:id', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	updateMessageController;
});
router.delete('/:id', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	deleteMessageByIdController;
});
export default router;
