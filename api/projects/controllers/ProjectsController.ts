import { Request, Response } from 'express';
import {
	createProject,
	deleteProjectById,
	getAllProjects,
	getProjectById,
	updateProject,
} from '../services/ProjectsService';

export async function getAllProjectsController(req: Request, res: Response) {
	const projects = await getAllProjects();
	res.send(projects);
}
export async function getProjectByIdController(req: Request, res: Response) {
	const projects = await getProjectById(req.body.id);
	res.send(projects);
}
export async function createProjectController(req: Request, res: Response) {
	await createProject(req.body);
	res.sendStatus(200);
}
export async function updateProjectController(req: Request, res: Response) {
	const project = req.body;
	await updateProject(project);
	res.sendStatus(200);
}
export async function deleteProjectByIdController(req: Request, res: Response) {
	const { id } = req.params;
	await deleteProjectById(Number.parseInt(id));
	res.sendStatus(200);
}
