import {Router} from "express"
import {check} from "express-validator"
import { deleteData, getData, insertData, updateData } from "../controllers/reportes.controllers.js";

const router = Router();

router.get('/getAll',getData);

router.post('/insert',[
    check("indicador", "Id de indicador no valido").isMongoId(),
    check("problema", "Problema no valido").not().isEmpty(),
    check("documentalista", "Documentalista id no valido").isMongoId(),
    check("fecha_reporte", "Fecha no valida").not().isEmpty()
],insertData)

router.delete("/delete/:id",[
    check("id", "Id no valido").isMongoId()
],deleteData)

router.put("/update/:id",[
    check("id", "Id no valido").isMongoId(),
    check("indicador", "Id de indicador no valido").isMongoId(),
    check("problema", "Problema no valido").not().isEmpty(),
    check("documentalista", "Documentalista id no valido").isMongoId(),
    check("fecha_reporte", "Fecha no valida").not().isEmpty()
],updateData)

export default router