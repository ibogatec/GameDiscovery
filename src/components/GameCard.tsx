import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import type Game from "@/dto/game.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import GameUsers from "@/components/GameUsers.tsx";

interface GameCardProps {
    game: Game;
}

function GameCard({ game }: GameCardProps) {
    return (
        <Card.Root height="100%" width="100%">
            <Image src={game.image} alt={game.title} height={300} width="100%" objectFit="cover" />
            <Card.Body justifyContent="space-between">
                <Heading fontSize="2xl">{game.title}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconList platforms={game.platforms} />
                    <GameUsers users={game.users} />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCard;
