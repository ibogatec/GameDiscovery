import type Game from "@/dto/game.ts";
import httpService, { type ResponseType, type ErrorType, type FinallyType } from "@/services/http-service.ts";

class GameService {

    public getAllGames(responseCallback?: ResponseType<Game[]>, errorCallback?: ErrorType, finallyCallback?: FinallyType) {
        httpService.endpoint = 'giveaways';
        return httpService.getAll<Game>(responseCallback, errorCallback, finallyCallback);
    }

}

export default new GameService();
