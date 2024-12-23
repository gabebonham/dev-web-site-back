import { Router } from 'express';
import {
	getAboutController,
	updateAboutController,
} from './controllers/AboutController';
import { setHeaders } from '../lib/HeadersSetter';
import authenticatFacade from '../authFacade';

const router = Router();

router.get('', async (req, res, next) => {
	getAboutController(req, res);
});
router.put('', async (req, res, next) => {
	updateAboutController(req, res);
});

export default router;
