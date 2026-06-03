import { useEffect, useState } from "react";
import type Game from "@/dto/game.ts";
import type ApiError from "@/dto/api-error.ts";
import gameService from "@/services/game-service.ts";

function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<ApiError | null>(null);

    useEffect(() => {
        const abortController = gameService.getAllGames(
            response => setGames(response),
            err => setError(err)
        );
        return () => abortController.abort();
    }, []);

    return { games, error, setGames, setError };
}

export default useGames;
