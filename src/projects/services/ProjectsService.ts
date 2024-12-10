import { PrismaClient } from '@prisma/client';
import Project from '../models/ProjectModel';

const prisma = new PrismaClient();

export async function getAllProjects() {
	return await prisma.project.findMany();
}

export async function getProjectById(id: number) {
	return await prisma.project.findUnique({ where: { id: id } });
}

export async function createProject(project: Project) {
	const s = await prisma.project.create({
		data: {
			name: project.name,
			link: project.link,
			description: project.description,
		},
	});
}

export async function updateProject(project: Project) {
	await prisma.project.update({
		where: { id: project.id },
		data: project,
	});
}

export async function deleteProjectById(id: number) {
	await prisma.project.delete({ where: { id: id } });
}
