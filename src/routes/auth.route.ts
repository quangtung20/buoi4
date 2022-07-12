import express from 'express'
import { AuthCtrl } from '../controllers/auth.controller';

export const router = express.Router();

router.post('/', AuthCtrl.register);
router.get('/',AuthCtrl.getAllUsers);
router.get('/:id', AuthCtrl.getUserById);
router.put('/:id',AuthCtrl.updateUser);
router.delete('/:id',AuthCtrl.deleteUser);

export default router;