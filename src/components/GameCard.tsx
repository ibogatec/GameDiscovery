import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import GameUsers from "@/components/GameUsers.tsx";
import HighlightText from "@/components/HighlightText.tsx";
import noImage from "@/assets/no-image-placeholder.webp";
import type Game from "@/dto/game.ts";

interface GameCardProps {
    game: Game;
    searchTerm?: string;
}

function GameCard({ game, searchTerm }: GameCardProps) {
    const gameImageUrl = game?.image ? game.image : noImage;
    return (
        <Card.Root height="100%" width="100%">
            <Image src={gameImageUrl} alt={game.title} height={300} width="100%" objectFit="cover" />
            <Card.Body justifyContent="space-between">
                <Heading fontSize="2xl">
                    <HighlightText text={game.title} query={searchTerm} />
                </Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.platforms} />
                    <GameUsers users={game.users} />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCard;
