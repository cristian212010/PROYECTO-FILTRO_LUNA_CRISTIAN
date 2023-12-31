import { Router } from 'express';
import { check } from 'express-validator';
import { getData, insertData, deleteData, updateData, getOneData } from '../controllers/usuarios.controllers.js';
import validateDocuments from '../middlewares/validate.documents.js';

const router = Router();

router.get('/getAll', getData);

router.get('/getOne/:usuario', getOneData);

router.post('/insert',[
    check('nombre', 'Nombre no valido').not().isEmpty(),
    check('apellido', 'Apellido no valido').not().isEmpty(),
    check('usuario', 'Usuario no valido').not().isEmpty(),
    check('password', 'Password').not().isEmpty(),
    check('cargo', 'Cargo no valido').isMongoId(),
    validateDocuments
], insertData);

router.delete('/delete/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validateDocuments
], deleteData);

router.put('/update/:id', [
    check('nombre', 'Nombre no valido').not().isEmpty(),
    check('apellido', 'Apellido no valido').not().isEmpty(),
    check('usuario', 'Usuario no valido').not().isEmpty(),
    check('cargo', 'Cargo no valido').isMongoId(),
    validateDocuments
], updateData);

export default router;