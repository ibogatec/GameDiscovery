import { Card, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import GameUsers from "@/components/GameUsers.tsx";
import HighlightText from "@/components/HighlightText.tsx";
import GamePrice from "@/components/GamePrice.tsx";
import Emoji from "@/components/Emoji.tsx";
import noImage from "@/assets/no-image-placeholder.webp";
import type Game from "@/dto/game.ts";

interface GameCardProps {
    game: Game;
    searchTerm?: string;
}

function GameCard({ game, searchTerm }: GameCardProps) {
    const gameImageUrl = game?.image ? game.image : noImage;
    return (
        <Card.Root height="100%" width="100%" overflow="hidden" display="flex" flexDirection="column">
            <Image src={gameImageUrl} alt={game.title} height="220px" width="100%" objectFit="cover" />
            <Card.Body display="flex" flexDirection="column" justifyContent="space-between" flex="1" p={5} gap={3}>
                <VStack align="stretch" gap={2}>
                    <Heading fontSize="xl" lineClamp={2}>
                        <HighlightText text={game.title} query={searchTerm} />
                    </Heading>
                    <PlatformIconList platforms={game.platforms} />
                </VStack>
                <HStack justifyContent="flex-end" alignItems="center" gap={2} pt={2}>
                    <Emoji users={game.users} />
                    <GameUsers users={game.users} />
                    <GamePrice price={game.worth} />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCard;
