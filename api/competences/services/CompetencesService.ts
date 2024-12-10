import { PrismaClient } from '@prisma/client';
import Competence from '../models/CompetenceModel';

const prisma = new PrismaClient();

export async function getAllCompetences() {
	return await prisma.competence.findMany();
}

export async function getCompetenceById(id) {
	return await prisma.competence.findUnique({ where: { id: id } });
}

export async function createCompetence(competence: Competence) {
	await prisma.competence.create({
		data: {
			name: competence.name,
			rating: competence.rating,
		},
	});
}
export async function deleteCompetenceById(id) {
	await prisma.competence.delete({ where: { id: id } });
}
