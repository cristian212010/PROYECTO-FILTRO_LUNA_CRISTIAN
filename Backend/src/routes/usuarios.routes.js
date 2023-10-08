import { Router } from 'express';
import { check } from 'express-validator';
import { getData, insertData, deleteData, updateData } from '../controllers/usuarios.controllers.js';

const router = Router();

router.get('/getAll', getData);

router.post('/insert',[
    check('nombre', 'Nombre no valido').not().isEmpty(),
    check('apellido', 'Apellido no valido').not().isEmpty(),
    check('usuario', 'Usuario no valido').not().isEmpty(),
    check('password', 'Password').not().isEmpty(),
    check('cargo', 'Cargo no valido').isMongoId(),
], insertData);

router.delete('/delete/:id',[
    check('id', 'No es un ID válido').isMongoId(),
], deleteData);

router.put('/update/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('nombre', 'Nombre no valido').not().isEmpty(),
    check('apellido', 'Apellido no valido').not().isEmpty(),
    check('usuario', 'Usuario no valido').not().isEmpty(),
    check('password', 'Password').not().isEmpty(),
    check('cargo', 'Cargo no valido').isMongoId(),
], updateData);

export default router;