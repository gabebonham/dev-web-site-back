import { Router } from 'express';
import {
	getAboutController,
	updateAboutController,
} from './controllers/AboutController';
import { setHeaders } from '../lib/HeadersSetter';
import authenticatFacade from '../authFacade';

const router = Router();

router.get('', getAboutController);
router.put('', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	updateAboutController(req, res);
});

export default router;
