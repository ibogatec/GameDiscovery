import { useEffect, useState } from "react";
import type Game from "@/dto/game.ts";
import type ApiError from "@/dto/api-error.ts";
import gameService from "@/services/game-service.ts";

function useGames() {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<ApiError | undefined>(undefined);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const abortController = gameService.getAllGames(
            response => setGames(response),
            err => setError(err),
            () => {
                if (abortController.signal.aborted) {
                    return;
                }
                setLoading(false);
            }
        );
        return () => abortController.abort();
    }, []);

    return { games, error, isLoading, setGames, setError };
}

export default useGames;
