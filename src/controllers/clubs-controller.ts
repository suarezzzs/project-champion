import { Request, Response } from "express";
import { getClubServices } from "../services/clubs-services";


export const getClubs = async (req: Request, res: Response) => {
    const response = await getClubServices();
    res.status(response.statusCode).json(response.body);
};