import { Request, Response } from "express";
import { createPlayerService, deletePlayerService, getPlayerByIdService, getPlayerService, updatePlayerService } from "../services/players-services";
import { noContent } from "../utils/http-helper";
import { statisticsModel } from "../models/statistics-model";


export const getPlayer = async (req:Request, res:Response)=> {

        const httpResponse = await getPlayerService();
        

        res.status(httpResponse.statusCode).json(httpResponse.body);
    } 

export const getPlayerById = async (req:Request, res:Response) => {
    const id = req.params.id;
    const httpResponse = await getPlayerByIdService(Number(id));
    res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req:Request, res:Response) => {
    const bodyValue = req.body;
    const httpResponse = await createPlayerService(bodyValue);
    
    res.status(httpResponse.statusCode).json(httpResponse.body);    
}

export const deletePlayer = async (req:Request, res:Response) => {

    const id = parseInt(req.params.id);
    const httpResponse = await deletePlayerService(id);

    res.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const bodyValue: statisticsModel = req.body;
    const httpResponse = await updatePlayerService(id, bodyValue);

    res.status(httpResponse.statusCode).json(httpResponse.body);
};