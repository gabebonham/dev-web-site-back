import { Router } from 'express';
import { getAllProjects } from './services/ProjectsService';
import {
	createProjectController,
	deleteProjectByIdController,
	getAllProjectsController,
	getProjectByIdController,
	updateProjectController,
} from './controllers/ProjectsController';

const router = Router();

router.get('', getAllProjectsController);
router.get('/:id', getProjectByIdController);
router.post('', createProjectController);
router.put('', updateProjectController);
router.delete('/:id', deleteProjectByIdController);

export default router;
