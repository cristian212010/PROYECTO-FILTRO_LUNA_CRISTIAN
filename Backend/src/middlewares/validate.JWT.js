import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import connect from '../database/conection.js';
import dotenv from 'dotenv';

dotenv.config();

const validateToken = async (req, res, next) => {
    const token = req.header('token');

    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const db = await connect();
        const { uid } = jwt.verify(token, process.env.SECRET_OR_PRIVATE_KEY);
        const usuario = await db.collection('usuarios').find({ _id: new ObjectId(uid) }).toArray();

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        } 

        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        } 

        req.usuario = usuario; 
        next();
    } catch (error) {
        return res.status(401).json({
            msg: 'Token no válido'
        });
    }
};

export default validateToken;