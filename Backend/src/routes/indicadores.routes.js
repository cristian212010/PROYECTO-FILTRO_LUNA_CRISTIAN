import {Router} from "express"
import {check} from "express-validator"
import { deleteData, getData, insertData, updateData } from "../controllers/indicadores.controllers.js";
import validateDocuments from "../middlewares/validate.documents.js";

const router = Router();

router.get('/getAll', getData);

router.post('/insert',[
    check("indicador", "Indicador no valido").not().isEmpty(),
    check("descripcion", "Descripcion no valida").not().isEmpty(),
    check("categoria", "Categoria no valida").not().isEmpty(),
    check("fecha_inicio", "Fecha_inicio no valida").not().isEmpty(),
    check("fecha_fin", "Fecha_fin no valida").not().isEmpty(),
    check("formula", "Formula no valida").not().isEmpty(),
    check("frecuencia", "Frecuencia no valida").not().isEmpty(),
    check("cumplimiento", "Cumplimiento no valida").not().isEmpty(),
    check("area", "Area id no valido").isMongoId(),
    validateDocuments
], insertData);

router.delete("/delete/:id",[
    check("id", "id no valido").isMongoId(),
    validateDocuments
, deleteData])

router.put("/update/:id",[
    check("id", "no es un id valido").isMongoId(),
    check("indicador", "Indicador no valido").not().isEmpty(),
    check("descripcion", "Descripcion no valida").not().isEmpty(),
    check("categoria", "Categoria no valida").not().isEmpty(),
    check("fecha_inicio", "Fecha_inicio no valida").not().isEmpty(),
    check("fecha_fin", "Fecha_fin no valida").not().isEmpty(),
    check("formula", "Formula no valida").not().isEmpty(),
    check("frecuencia", "Frecuencia no valida").not().isEmpty(),
    check("cumplimiento", "Cumplimiento no valida").not().isEmpty(),
    check("area", "Area id no valido").isMongoId(),
    validateDocuments
],updateData);

export default router

