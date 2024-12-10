import { Router } from 'express';
import {
	getAllContactsController,
	createContactController,
	deleteContactByIdController,
	getContactByIdController,
} from './controllers/ContactControllers';

const router = Router();

router.get('', getAllContactsController);
router.get('/:id', getContactByIdController);
router.post('', createContactController);
router.delete('/:id', deleteContactByIdController);

export default router;
