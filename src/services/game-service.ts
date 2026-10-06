import httpService from "@/services/http-service.ts";
import type Game from "@/dto/game.ts";

class GameService {
    public getAllGames() {
        httpService.endpoint = 'giveaways';
        return httpService.getAll<Game>();
    }
}

export default new GameService();
