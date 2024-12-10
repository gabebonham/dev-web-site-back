import { Router } from 'express';
import {
	createCompetenceController,
	deleteCompetenceByIdController,
	getAllCompetencesController,
	getCompetenceByIdController,
} from './controllers/CompetencesController';

const router = Router();

router.get('', getAllCompetencesController);
router.get('/:id', getCompetenceByIdController);
router.post('', createCompetenceController);
router.delete('/:id', deleteCompetenceByIdController);

export default router;
