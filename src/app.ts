import express, { Request, Response, json } from "express";
import cors from "cors";
import router from "./routes";

function createApp(){
    const app = express();

    app.use(json());
    app.use("/api", router );
    const corsOptions = {
        origin:["http://felipao.sistem.com", "http://localhost:3000", "http://localhost:3001"],
        methods: ["GET", "UPDATE"],
    }
    app.use(cors());

    return app;
}

export default createApp;

