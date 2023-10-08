import express from 'express';
import cors from 'cors';

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middleware();
    }

    middleware(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port http://localhost:${this.port}`);
        });
    };
}

export default Server;