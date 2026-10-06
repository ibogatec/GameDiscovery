import { useQuery } from "@tanstack/react-query";
import gameService from "@/services/game-service.ts";
import type Game from "@/dto/game.ts";
import type ApiError from "@/dto/api-error.ts";

interface GameQueryResult {
    filteredGames: Game[];
    platforms: string[];
    gameTypes: string[];
}

export default function useGames(platform?: string, type?: string, sort?: string, searchTerm?: string) {
    const { data, error, isLoading } = useQuery<Game[], ApiError, GameQueryResult>({
        queryKey: ['games'],
        queryFn: gameService.getAllGames,
        select: allGames => {
            const filteredGames = allGames
                .filter(game => {
                    if (!platform || platform.toLocaleLowerCase().includes('all')) {
                        return true;
                    }
                    return game.platforms.toLocaleLowerCase().includes(platform);
                })
                .filter(game => {
                    if (!type || type.toLocaleLowerCase().includes('all')) {
                        return true;
                    }
                    return game.type.toLocaleLowerCase().includes(type);
                })
                .filter(game => {
                    if (!searchTerm || searchTerm === '') {
                        return true;
                    }
                    return game.title.toLocaleLowerCase().includes(searchTerm);
                })
                .toSorted((a, b) => {
                    if (!sort) {
                        return 0;
                    }
                    const selectedSort = sort ? sort.toLocaleLowerCase().trim() : 'title';
                    const sortKey = selectedSort === 'price' ? 'worth' : selectedSort as keyof Game;
                    let valueA = a[sortKey];
                    let valueB = b[sortKey];
                    let sortDirection = 0;
                    if (sortKey === 'worth') {
                        valueA = parseFloat(a[sortKey].replace(/[^0-9.]/g, ''));
                        if (!valueA || Number.isNaN(valueA)) {
                            valueA = Number.MAX_VALUE;
                        }
                        valueB = parseFloat(b[sortKey].replace(/[^0-9.]/g, ''));
                        if (!valueB || Number.isNaN(valueB)) {
                            valueB = Number.MAX_VALUE;
                        }
                        sortDirection = valueA - valueB;
                    } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                        sortDirection = valueB - valueA;
                    } else if (typeof valueA === 'string' && typeof valueB === 'string') {
                        sortDirection = valueA.localeCompare(valueB);
                    }
                    return sortDirection;
                });

            const platforms = [
                ...new Set(
                    allGames?.flatMap(game => game.platforms
                        .toLocaleLowerCase()
                        .split(',')
                        .map(platform => platform.trim())
                        .filter(Boolean))
                )
            ];
            const gameTypes = [
                'all types',
                ...new Set(
                    allGames?.flatMap(game => game.type
                        .toLocaleLowerCase())
                        .map(type => type.trim())
                        .filter(Boolean)
                )
            ];
            return { filteredGames, platforms, gameTypes };
        },
        staleTime: 24 * 3_600_000, // Fetched data remains fresh for 24 hours before becoming stale
    });
    return {
        filteredGames: data?.filteredGames || [],
        platforms: data?.platforms || [],
        gameTypes: data?.gameTypes || [],
        gamesError: error || undefined,
        areGamesLoading: isLoading
    };
}
