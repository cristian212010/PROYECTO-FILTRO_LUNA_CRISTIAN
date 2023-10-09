import { Router } from 'express';
import { check } from 'express-validator';
import { getData, insertData, deleteData, updateData } from '../controllers/cargos.controllers.js';

const router = Router();


router.get('/getAll', getData);

router.post('/insert', [
    check("cargo", "Cargo no valido").not().isEmpty(),
    check("funcion", "Funcion no valida").not().isEmpty(),
    check("departamento", "Departamento id no valido").isMongoId()
], insertData)

router.delete('/delete/:id',[
    check("id", "id no valido").isMongoId()
],deleteData)

router.put("/update/:id", [
    check("id", "id no valido").isMongoId(),
    check("cargo", "Cargo no valido").not().isEmpty(),
    check("funcion", "Funcion no valida").not().isEmpty(),
    check("departamento", "Departamento id no valido").isMongoId()
],updateData)

export default router