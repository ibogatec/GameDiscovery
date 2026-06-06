import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";

function GameGrid() {
    const { games, error } = useGames();
    return (
        <div>
            {error && <Text>Name: {error.name}, Message: {error.message}, Code: {error.code}, Status: {error.status}</Text>}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} padding={10}>
                {games.map(game => <GameCard game={game} key={game.id}></GameCard>)}
            </SimpleGrid>
        </div>
    );
}

export default GameGrid;
