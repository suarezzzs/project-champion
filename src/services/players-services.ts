import { PlayerModel } from "../models/player-model";
import { statisticsModel } from "../models/statistics-model";
import * as PlayerRepostory from "../repositoris/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async ()=> {
    const data =  await PlayerRepostory.findAllPlayers();
    let response = null;

    if(data && data.length > 0){
         response = HttpResponse.ok(data);
    } else {
        // Retorna OK com um array vazio se não houver jogadores
        response = HttpResponse.ok([]);
    }

    return response;

}

export const getPlayerByIdService = async (id:number)=> {
    const data =  await PlayerRepostory.findPlayerById(id);
    let response = null;

    if(data){
         response = HttpResponse.ok(data);
    } else {
        // Retorna 404 Not Found se o jogador não for encontrado
        response = await HttpResponse.notFound({ message: "Player not found" });
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel)=> {
    // Validação básica dos dados de entrada
    if (!player || !player.name || !player.club || !player.statistics) {
        return HttpResponse.badRequest({ message: "Invalid player data provided" });
    }

    const newPlayer = await PlayerRepostory.insertPlayer(player);
    return HttpResponse.created(newPlayer);
}

export const deletePlayerService = async (id:number) =>{
    const wasDeleted = await PlayerRepostory.deleteOnePlayer(id);
    if (wasDeleted) {
        return HttpResponse.noContent({message: "Player deleted successfully"});
    }
    return HttpResponse.notFound({message: "Player not found"});
}

export const updatePlayerService = async (id: number, statistics:  statisticsModel) => {
    const updatedPlayer = await PlayerRepostory.findAndModifyPlayer(id, statistics);
    if (updatedPlayer) {
        return HttpResponse.ok(updatedPlayer);
    }
    return HttpResponse.notFound({message: "Player not found"});
}