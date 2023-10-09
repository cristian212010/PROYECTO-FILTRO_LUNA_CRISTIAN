import { Router } from "express"
import { check } from "express-validator"
import { deleteData, getData, insertData, updateData } from "../controllers/areas.controllers.js";
import validateDocuments from "../middlewares/validate.documents.js";

const router = Router();

router.get('/getAll', getData);

router.post('/insert',[
    check("nombre", "Nombre no valido").not().isEmpty(),
    check("ubicacion", "Ubicacion no valida").not().isEmpty(),
    check("descripcion", "Descripcion no valida").not().isEmpty(),
    validateDocuments
], insertData);

router.delete("/delete/:id",[
    check("id", "id no valido").isMongoId(),
    validateDocuments
, deleteData])

router.put("/update/:id",[
    check("id", "no es un id valido").isMongoId(),
    check("nombre", "Nombre no valido").not().isEmpty(),
    check("ubicacion", "Ubicacion no valida").not().isEmpty(),
    check("descripcion", "Descripcion no valida").not().isEmpty(),
    validateDocuments
],updateData);

export default router