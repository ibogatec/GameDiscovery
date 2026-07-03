import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";

function GameGrid() {
    const { games, error, isLoading } = useGames();
    const platforms = [
        ...new Set(
            games.map(game => game.platforms
                .toLocaleLowerCase()
                .split(','))
                .flat()
                .map(platform => platform.trim())
                .filter(Boolean))
    ];
    const skeletons = Array.from({ length: 24 }, (_, index) => index);
    console.log(platforms);
    return (
        <div>
            {error && <Text>Name: {error.name}, Message: {error.message}, Code: {error.code}, Status: {error.status}</Text>}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} padding={10}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {games.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </div>
    );
}

export default GameGrid;
