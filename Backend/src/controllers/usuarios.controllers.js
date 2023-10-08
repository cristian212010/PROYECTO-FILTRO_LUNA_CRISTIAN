import connect from "../database/conection.js";
import { ObjectId } from "mongodb";

const getData = async (req, res) =>{
    try {
        const db = await connect();
        const response = await db.collection('usuarios').aggregate([
            {
                $match: {estado:true}
            },
            {
                $lookup:{
                    from: "cargos",
                    localField: "cargo",
                    foreignField: "_id",
                    as: "cargo"
                }
            }
        ]).toArray();
        res.json(response);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const insertData = async (req, res) =>{
    try {
        const db = await connect();
        const data = req.body;
        data.cargo = new ObjectId(data.cargo);
        data.estado = true;
        data.avatar = 'default.jpg';
        const response = await db.collection('usuarios').insertOne(data);
        res.json({
            response,
            data
        });
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const deleteData = async (req, res) => {
    try {
        const db = await connect();
        const { id } = req.params;
        const response = await db.collection('usuarios').findOneAndUpdate({_id: new ObjectId(id)}, { $set: {estado: false }});
        res.json(response);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

const updateData = async (req, res) =>{
    try {
        const db = await connect();
        const { id } = req.params;
        const data = req.body;
        if (data.cargo) {
            data.cargo = new ObjectId(data.cargo);
        }
        await db.collection('usuarios').findOneAndUpdate({ _id: new ObjectId(id) }, { $set: data });
        res.send(data);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export { getData, insertData, deleteData, updateData };