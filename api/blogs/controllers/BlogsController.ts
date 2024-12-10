import { Request, Response } from 'express';
import {
	createBlog,
	deleteBlogById,
	getAllBlogs,
	getBlogById,
	updateBlog,
} from '../services/BlogsService';
import { deleteProjectById } from '../../projects/services/ProjectsService';

export async function getAllBlogsController(req: Request, res: Response) {
	const blogs = await getAllBlogs();
	res.send(blogs);
}
export async function getBlogByIdController(req: Request, res: Response) {
	const { id } = req.params;
	const blogs = await getBlogById(Number.parseInt(id));
	res.send(blogs);
}
export async function createBlogController(req: Request, res: Response) {
	await createBlog(req.body);
	res.sendStatus(200);
}
export async function updateBlogController(req: Request, res: Response) {
	console.log(req.body);
	await updateBlog(req.body);
	res.sendStatus(200);
}
export async function deleteBlogByIdController(req: Request, res: Response) {
	const { id } = req.params;
	await deleteBlogById(Number.parseInt(id));
	res.sendStatus(200);
}
