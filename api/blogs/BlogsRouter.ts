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

router.get('', getAllBlogsController);
router.get('/:id', getBlogByIdController);
router.post('', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	createBlogController;
});
router.put('', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	updateBlogController;
});
router.delete('/:id', (req, res, next) => {
	setHeaders(res);
	authenticatFacade(req, res, next);
	deleteBlogByIdController;
});

export default router;
