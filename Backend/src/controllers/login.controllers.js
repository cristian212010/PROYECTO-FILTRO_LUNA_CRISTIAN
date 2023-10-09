import { response } from "express";
import bcryptjs from 'bcryptjs';
import connect from "../database/conection.js";
import generateJWT from '../helpers/generate.JWT.js';

const login = async (req, res=response) => {
    const {usuario, password} = req.body;
    try {
        const db = await connect();
        const user = await db.collection('usuarios').find({usuario}).toArray();
        const usr = user[0]

        if (!usr.usuario){
            return res.status(400).json({
                msg:"Usuario no es correcto"
            })
        };

        if (!usr.estado){
            return res.status(400).json({
                msg:"Estado Inactivo"
            })
        };

        const validPassword = bcryptjs.compareSync(password, usr.password);

        if (!validPassword){
            return res.status(400).json({
                msg:"Password Incorrecto"
            })
        };

        const token = await generateJWT(usuario.id)

        res.json({
            usuario,
            token
         });

    } catch (error) {
        console.log(error);
        return res.json({
            msg:"contacte al servicio tecnico"
        });
    };
};

export default login;
