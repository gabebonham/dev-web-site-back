import { Router } from 'express';
import {
	createBlogController,
	deleteBlogByIdController,
	getAllBlogsController,
	getBlogByIdController,
	updateBlogController,
} from './controllers/BlogsController';
import authenticatFacade from '../authFacade';
import { setHeaders } from '../lib/HeadersSetter';

const router = Router();

router.get('', async (req, res, next) => {
	setHeaders(req, res);
	getAllBlogsController(req, res);
});
router.get('/:id', async (req, res, next) => {
	setHeaders(req, res);
	getBlogByIdController(req, res);
});
router.post('', async (req, res, next) => {
	setHeaders(req, res);
	(await authenticatFacade(req, res, next)) &&
		createBlogController(req, res);
});
router.put('', async (req, res, next) => {
	setHeaders(req, res);
	(await authenticatFacade(req, res, next)) &&
		updateBlogController(req, res);
});
router.delete('/:id', async (req, res, next) => {
	setHeaders(req, res);
	(await authenticatFacade(req, res, next)) &&
		deleteBlogByIdController(req, res);
});

export default router;
