import { ClubModel } from "../models/clubs-model";
import fs from "fs/promises"
import "../data/clubs.json"

const database = [
        {
            id: 1,
            name: "barcelona"
        },
        {
            id: 2,
            name: "real madri"
        }
    ]

export const findAllClubs = async(): Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const club: ClubModel[] = JSON.parse(data);
    return club;
};

