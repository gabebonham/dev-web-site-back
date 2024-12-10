import { Router } from 'express';
import {
	getAllMessagesController,
	deleteMessageByIdController,
	getMessageByIdController,
	storeMessageController,
	updateMessageController,
} from './controller/MessageController';

const router = Router();

router.get('', getAllMessagesController);
router.get('/:id', getMessageByIdController);
router.post('', storeMessageController);
router.put('/:id', updateMessageController);
router.delete('/:id', deleteMessageByIdController);
export default router;
