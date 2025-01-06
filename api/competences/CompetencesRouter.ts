import { Router } from 'express';
import {
	createCompetenceController,
	deleteCompetenceByIdController,
	getAllCompetencesController,
	getCompetenceByIdController,
} from './controllers/CompetencesController';
import authenticateFacade from '../authFacade';

const router = Router();

router.get('', async (req, res, next) => {
	getAllCompetencesController(req, res);
});
router.get('/:id', async (req, res, next) => {
	getCompetenceByIdController(req, res);
});
router.post('', async (req, res, next) => {
	authenticateFacade(req, res, next) &&
		createCompetenceController(req, res);
});
router.delete('/:id', async (req, res, next) => {
	authenticateFacade(req, res, next) &&
		deleteCompetenceByIdController(req, res);
});

export default router;
