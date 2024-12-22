import { Router } from 'express';
import { getAllProjects } from './services/ProjectsService';
import {
	createProjectController,
	deleteProjectByIdController,
	getAllProjectsController,
	getProjectByIdController,
	updateProjectController,
} from './controllers/ProjectsController';
import authenticatFacade from '../authFacade';
import { setHeaders } from '../lib/HeadersSetter';

const router = Router();

router.get('', async (req, res, next) => {
	getAllProjectsController(req, res);
});
router.get('/:id', async (req, res, next) => {
	getProjectByIdController(req, res);
});
router.post('', async (req, res, next) => {
	createProjectController(req, res);
});
router.put('', async (req, res, next) => {
	updateProjectController(req, res);
});
router.delete('/:id', async (req, res, next) => {
	deleteProjectByIdController(req, res);
});

export default router;
