import connet from "../database/conection.js"
import { ObjectId } from "mongodb"

const getData = async (req, res) => {
    try {
        const db = await connet();
        const response = await db.collection("cargos").aggregate([
            {$match: {estado:true}},
            {$lookup:{
                from: "areas",
                localField: "departamento",
                foreignField: "_id",
                as: "departamento"
            }}
        ]).toArray();
        res.json(response);
    } catch (error) {
        res.status(404).json(error.message);   
    }
};


const insertData = async (req, res) => {
    try {
        const db = await connet();
        const data = req.body
        data.departamento = new ObjectId(data.departamento)
        data.estado = true;
        const response = await db.collection("cargos").insertOne(data);
        res.json(response);
    } catch (error) {
        res.status(404).json(error.message);        
    }
};


const deleteData = async (req, res) => {
    try {
        const db = await connet();
        const id = req.params.id
        const response = await db.collection("cargos").findOneAndUpdate({_id: new ObjectId(id)}, {$set:{estado: false}})
        res.json(response);
    } catch (error) {
        res.status(404).json(error.message)
    }
};


const updateData = async (req, res) => {
    try {
        const db = await connet();
        const id = req.params.id
        const data = req.body
        if (data.departamento) {
            data.departamento = new ObjectId(data.departamento);
        }
        await db.collection("cargos").findOneAndUpdate({_id: new ObjectId(id)}, { $set: data});
        res.send(data);
    } catch (error) {
        res.status(404).json(error.message)
    }
};

const getOneData = async (req, res) =>{
    try {
        const db = await connet();
        const cargo = req.params.cargo;
        const response = await db.collection('cargos').aggregate([
            {
                $match: {cargo:cargo}
            },
            {
                $lookup:{
                    from: "areas",
                    localField: "departamento",
                    foreignField: "_id",
                    as: "departamento"
                }
            }
        ]).toArray();
        res.json(response);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export {getData,insertData,deleteData,updateData, getOneData}