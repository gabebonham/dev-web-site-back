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

router.get('', getAllCompetencesController);
router.get('/:id', getCompetenceByIdController);
router.post('', async (req, res, next) => {
	setHeaders(res);
	(await authenticatFacade(req, res, next)) &&
		createCompetenceController(req, res);
});
router.delete('/:id', async (req, res, next) => {
	setHeaders(res);
	(await authenticatFacade(req, res, next)) &&
		deleteCompetenceByIdController(req, res);
});

export default router;
