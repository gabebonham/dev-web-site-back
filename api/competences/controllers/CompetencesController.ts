import { Request, Response } from 'express';
import {
	createCompetence,
	deleteCompetenceById,
	getAllCompetences,
	getCompetenceById,
} from '../services/CompetencesService';

export async function getAllCompetencesController(req: Request, res: Response) {
	const competences = await getAllCompetences();
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://dev-web-site-front-production.up.railway.app',
	); // Frontend domain
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	); // Allow methods
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers in requests

	res.setHeader('Accept', 'application/json');
	res.send(competences);
}

export async function getCompetenceByIdController(req: Request, res: Response) {
	const competence = await getCompetenceById(req.body.id);
	res.send(JSON.stringify({ competence: competence }));
}
export async function createCompetenceController(req: Request, res: Response) {
	await createCompetence(req.body);
	res.sendStatus(200);
}
export async function deleteCompetenceByIdController(
	req: Request,
	res: Response,
) {
	const { id } = req.params;
	await deleteCompetenceById(Number.parseInt(id));
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://dev-web-site-front-production.up.railway.app',
	); // Frontend domain
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	); // Allow methods
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers in requests

	res.setHeader('Accept', 'application/json');
	res.json({ msg: 'ok' });
	res.send({ msg: 'ok' });
}
