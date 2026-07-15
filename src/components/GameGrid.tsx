import { SimpleGrid, Text } from "@chakra-ui/react";
import type Game from "@/dto/game.ts";
import type ApiError from "@/dto/api-error.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";

interface Props {
    games?: Game[];
    error?: ApiError;
    isLoading: boolean;
}

function GameGrid({ games, error, isLoading }: Props) {
    const skeletons = Array.from({ length: 24 }, (_, index) => index);
    return (
        <div>
            {error && <Text>Name: {error.name}, Message: {error.message}, Code: {error.code}, Status: {error.status}</Text>}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10} padding={10}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                )}
                {games?.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                )}
            </SimpleGrid>
        </div>
    );
}

export default GameGrid;
