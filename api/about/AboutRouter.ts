import { Router } from 'express';
import {
	getAboutController,
	updateAboutController,
} from './controllers/AboutController';

const router = Router();

router.get('', getAboutController);
router.put('', updateAboutController);

export default router;
