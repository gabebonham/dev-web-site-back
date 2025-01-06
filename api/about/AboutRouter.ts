import { Router } from 'express';
import {
	getAboutController,
	updateAboutController,
} from './controllers/AboutController';
import { setHeaders } from '../lib/HeadersSetter';
import authenticateFacade from '../authFacade';

const router = Router();

router.get('', async (req, res, next) => {
	getAboutController(req, res);
});
router.put('', async (req, res, next) => {
	authenticateFacade(req, res, next) && updateAboutController(req, res);
});

export default router;
