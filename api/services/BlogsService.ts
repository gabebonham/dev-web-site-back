import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function getAllBlogs() {
	return await prisma.blog.findMany();
}

export async function getBlogById(id: number) {
	return await prisma.blog.findUnique({
		where: { id: id },
	});
}

export async function createBlog(blog) {
	console.log('crate blog');
	await prisma.blog.create({
		data: {
			title: blog.title,
			body: blog.body,
			imageName: blog.imageName,
		},
	});
}

export async function updateBlog(blog) {
	console.log(blog);
	await prisma.blog.update({
		where: {
			id: blog.id,
		},
		data: blog,
	});
}

export async function deleteBlogById(id: number) {
	console.log('del');
	await prisma.blog.delete({ where: { id: id } });
}
