import { Router } from 'express';
import {
	createCompetenceController,
	deleteCompetenceByIdController,
	getAllCompetencesController,
	getCompetenceByIdController,
} from './controllers/CompetencesController';
import { setHeaders } from '../lib/HeadersSetter';
import authenticatFacade from '../authFacade';

const router = Router();

router.get('', async (req, res, next) => {
	setHeaders(req, res);
	getAllCompetencesController(req, res);
});
router.get('/:id', async (req, res, next) => {
	setHeaders(req, res);
	getCompetenceByIdController(req, res);
});
router.post('', async (req, res, next) => {
	setHeaders(req, res);
	(await authenticatFacade(req, res, next)) &&
		createCompetenceController(req, res);
});
router.delete('/:id', async (req, res, next) => {
	setHeaders(req, res);
	(await authenticatFacade(req, res, next)) &&
		deleteCompetenceByIdController(req, res);
});

export default router;
