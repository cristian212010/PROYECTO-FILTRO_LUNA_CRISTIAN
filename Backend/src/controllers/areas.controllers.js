import connect from "../database/conection.js";
import { ObjectId } from "mongodb"

const getData = async (req, res) => {
    try {
        const db = await connect();
        const response = await db.collection('areas').find({estado:true}).toArray();
        res.json(response);
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const insertData = async (req, res) => {
    try {
        const db = await connect();
        const data = req.body
        data.estado = true
        const response = await db.collection("areas").insertOne(data);
        res.json({
            response,
            data
        });
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const deleteData = async (req, res) => {
    try {
        const db = await connect();
        const id = req.params.id;
        const response = await db.collection("areas").findOneAndUpdate({_id: new ObjectId(id)}, {$set:{estado: false}})
        res.json(response)
    } catch (error) {
        res.status(404).json(error.message);
    }
};

const updateData = async (req, res) => {
    try {
        const db = await connect();
        const id = req.params.id;
        const data = req.body;
        await db.collection("areas").findOneAndUpdate({_id: new ObjectId(id)}, { $set: data });
        res.send(data);
    } catch (error) {
        res.status(404).json(error.message);
    }
};


export {getData, insertData, deleteData, updateData}