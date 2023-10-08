import express from 'express';
import cors from 'cors';
import indicadoresRoutes from '../routes/indicadores.routes.js'

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            indicadores: '/indicadores',
            usuarios: '/usuarios',
            reportes: '/reportes',
            areas : '/areas',
            cargos : '/cargos',
        }
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use(this.paths.indicadores, indicadoresRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port http://localhost:${this.port}`);
        });
    };
}

export default Server;