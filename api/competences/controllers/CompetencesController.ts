import { Request, Response } from 'express';
import {
	createCompetence,
	deleteCompetenceById,
	getAllCompetences,
	getCompetenceById,
} from '../services/CompetencesService';

export async function getAllCompetencesController(req: Request, res: Response) {
	const competences = await getAllCompetences();

	res.send(competences);
}

export async function getCompetenceByIdController(req: Request, res: Response) {
	const competence = await getCompetenceById(req.body.id);
	res.send(competence);
}
export async function createCompetenceController(req: Request, res: Response) {
	await createCompetence(req.body);
	res.send({ msg: 'ok' });
}
export async function deleteCompetenceByIdController(
	req: Request,
	res: Response,
) {
	const { id } = req.params;
	await deleteCompetenceById(Number.parseInt(id));

	res.send({ msg: 'ok' });
}
