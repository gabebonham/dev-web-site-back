import { PrismaClient } from '@prisma/client';
import Project from '../models/ProjectModel';

const prisma = new PrismaClient();

export async function getAllProjects() {
	return await prisma.projects.findMany();
}

export async function getProjectById(id: number) {
	return await prisma.projects.findUnique({ where: { id: id } });
}

export async function createProject(project: Project) {
	await prisma.projects.create({
		data: {
			name: project.name,
			link: project.link,
			description: project.description,
		},
	});
}

export async function updateProject(project: Project) {
	await prisma.projects.update({
		where: { id: project.id },
		data: project,
	});
}

export async function deleteProjectById(id: number) {
	await prisma.projects.delete({ where: { id: id } });
}
