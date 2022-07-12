import express from 'express'
import { AuthCtrl } from '../controllers/auth.controller';

const router = express.Router();

router.post('/', AuthCtrl.register)

export default router;