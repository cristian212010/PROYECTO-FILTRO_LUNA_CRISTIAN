import connect from "../database/conection.js";
import { ObjectId } from "mongodb";

const getData = async (req, res) => {
    try {
        const db = await connect()
        const response = await db.collection('reportes').aggregate([
            {$match: {estado: true}},
            {$lookup: {
                from: "indicadores",
                localField: "indicador",
                foreignField: "_id",
                as: "indicador"
            }},
            {$lookup: {
                from: "usuarios",
                localField: "documentalista",
                foreignField: "_id",
                as: "usuario"
            }}
        ]).toArray();
        res.json(response);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const insertData = async (req, res) => {
    try {
        const db = await connect();
        const data = req.body
        data.indicador = new ObjectId(data.indicador);
        data.documentalista = new ObjectId(data.documentalista);
        const response = await db.collection("reportes").insertOne(data);
        res.json({
            data,
            response
        })
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const deleteData = async (req, res) => {
    try {
        const db = await connect();
        const id   = req.params;
        const response = await db.collection("reportes").findOneAndUpdate({_id: new ObjectId(id)}, { $set: {estado: false }});
        res.json(response);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const updateData = async (req, res) => {
    try {
        const db = await connect();
        const id = req.params;
        const data = req.body
        if (data.indicador) {
            data.indicador = new ObjectId(data.indicador);
        }
        if (data.documentalista) {
            data.documentalista = new ObjectId(data.documentalista);
        }
        await db.collection('reportes').findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
        res.send(data);
    } catch (error) {
        
    }
};

export {getData, insertData, deleteData, updateData}