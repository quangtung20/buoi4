import express from 'express'
import { AuthCtrl } from '../controllers/auth.controller';

export const router = express.Router();

router.get('/search',AuthCtrl.learnSearch);
router.post('/register', AuthCtrl.register);
router.post('/login', AuthCtrl.login);
router.post('/logout', AuthCtrl.logout);
router.get('/',AuthCtrl.getAllUsers);
router.get('/:id', AuthCtrl.getUserById);
router.put('/:id',AuthCtrl.updateUser);
router.delete('/:id',AuthCtrl.deleteUser);


export default router;