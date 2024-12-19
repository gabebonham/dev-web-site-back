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
router.post('', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	createCompetenceController;
});
router.delete('/:id', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	deleteCompetenceByIdController;
});

export default router;
