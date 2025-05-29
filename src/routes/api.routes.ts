import { Router } from 'express';
import { getApiStatus, sendHelloMessage } from '../controllers/api.controllers';

const router = Router();

router.get('/status', getApiStatus);
router.get('/hello', sendHelloMessage);


export default router;