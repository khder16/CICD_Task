import { Router } from 'express';
import { getApiStatus } from '../controllers/api.controllers';

const router = Router();

router.get('/status', getApiStatus);

export default router;