import Project from '../models/ProjectModel';
import prisma from '../../db/PrismaDb';

export async function getAllProjects() {
	return await prisma.project.findMany();
}

export async function getProjectById(id: number) {
	return await prisma.project.findUnique({ where: { id: id } });
}

export async function createProject(project) {
	console.log('create');
	await prisma.project.create({
		data: {
			name: project.name,
			link: project.link,
			description: project.description,
			inDev: project.inDev,
		},
	});
}

export async function updateProject(project) {
	console.log('up');
	await prisma.project.update({
		where: { id: project.id },
		data: project,
	});
}

export async function deleteProjectById(id: number) {
	console.log('del');
	await prisma.project.delete({ where: { id: id } });
}
