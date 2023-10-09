import { Router } from 'express';
import { check } from 'express-validator';
import login from '../controllers/login.controllers.js';
import validateDocuments from '../middlewares/validate.documents.js';

const router = Router();

router.post('/login',[
    check('usuario', 'Usuario es obligatorio').not().isEmpty(),
    check('password', 'Password es obligatorio').not().isEmpty(),
    validateDocuments
], login);

export default router;