import { Router } from "express";
import avataresFile from "../controllers/avatares.controllers.js";
import validateToken from "../middlewares/validate.JWT.js";

const router = Router();

router.post('/', [
    validateToken
],avataresFile);

export default router;