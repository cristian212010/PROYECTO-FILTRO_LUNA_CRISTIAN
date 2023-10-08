import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = process.env.DB_NAME;

async function connect(){
    await client.connect();
    const db = client.db(dbName);
    return db;
}

export default connect;