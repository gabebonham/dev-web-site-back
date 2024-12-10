import { Router } from 'express';
import { loginController } from './controllers/AuthController';

const router = Router();

router.post('', loginController);

export default router;
