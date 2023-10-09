import express from 'express';
import cors from 'cors';
import indicadoresRoutes from '../routes/indicadores.routes.js'
import usuariosRoutes from '../routes/usuarios.routes.js';
import loginRoutes from '../routes/login.routes.js';
import reportesRoutes from '../routes/reportes.routes.js';
import areasRoutes from '../routes/areas.routes.js'
import cargosRoutes from '../routes/cargos.routes.js';

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            indicadores: '/indicadores',
            usuarios: '/usuarios',
            reportes: '/reportes',
            areas : '/areas',
            cargos : '/cargos'
        }
        this.middleware();
        this.routes();
    }

    middleware(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    routes(){
        this.app.use(this.paths.indicadores, indicadoresRoutes);
        this.app.use(this.paths.usuarios, usuariosRoutes);
        this.app.use(this.paths.usuarios, loginRoutes);
        this.app.use(this.paths.reportes, reportesRoutes);
        this.app.use(this.paths.areas, areasRoutes)
        this.app.use(this.paths.cargos, cargosRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port http://localhost:${this.port}`);
        });
    };
}

export default Server;