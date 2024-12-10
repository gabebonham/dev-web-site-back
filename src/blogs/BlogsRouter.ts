import { Router } from 'express';
import {
	createBlogController,
	deleteBlogByIdController,
	getAllBlogsController,
	getBlogByIdController,
	updateBlogController,
} from './controllers/BlogsController';

const router = Router();

router.get('', getAllBlogsController);
router.get('/:id', getBlogByIdController);
router.post('', createBlogController);
router.put('', updateBlogController);
router.delete('/:id', deleteBlogByIdController);

export default router;
