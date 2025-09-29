import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
      "id": 1,
      "name": "Lionel Messi",
      "club": "Paris Saint-Germain",
      "nationality": "Argentina",
      "position": "Forward",
      "statistics": {
        "Overall": 93,
        "Pace": 85,
        "Shooting": 94,
        "Passing": 91,
        "Dribbling": 95,
        "Defending": 38,
        "Physical": 65
      }
    },
    {
      "id": 2,
      "name": "Cristiano Ronaldo",
      "club": "Manchester United",
      "nationality": "Portugal",
      "position": "Forward",
      "statistics": {
        "Overall": 92,
        "Pace": 87,
        "Shooting": 93,
        "Passing": 82,
        "Dribbling": 88,
        "Defending": 34,
        "Physical": 75
      }
    },
    {
      "id": 3,
      "name": "Robert Lewandowski",
      "club": "Barcelona",
      "nationality": "Poland",
      "position": "Forward",
      "statistics": {
        "Overall": 91,
        "Pace": 78,
        "Shooting": 95,
        "Passing": 79,
        "Dribbling": 86,
        "Defending": 44,
        "Physical": 83
      }
    },
]

export const findAllPlayers = async(): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find( player => player.id === id);
}

export const insertPlayer = async (player: PlayerModel): Promise<PlayerModel> =>{
  // Gera um novo ID para o jogador
  const newId = database.length > 0 ? Math.max(...database.map(p => p.id)) + 1 : 1;
  const newPlayer = { ...player, id: newId };
  database.push(newPlayer);
  return newPlayer;
};

export const deleteOnePlayer = async (id:number): Promise<boolean> => {
  const index = database.findIndex(p => p.id === id);

  if(index !== -1){
    database.splice(index, 1);
    return true;
  }
  return false;
}

export const findAndModifyPlayer = async (id: number, statistics: statisticsModel): Promise<PlayerModel | undefined> => {
  const playerIndex = database.findIndex( player => player.id === id)
  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics;
    return database[playerIndex];
  }

  return undefined;
}