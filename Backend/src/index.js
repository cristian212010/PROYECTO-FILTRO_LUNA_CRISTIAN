import dotenv from 'dotenv';
import Server from './server/server.js';

dotenv.config();

const server = new Server();

server.listen();