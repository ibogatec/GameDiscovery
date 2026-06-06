import { Card, Heading, Image } from "@chakra-ui/react";
import type Game from "@/dto/game.ts";

interface GameCardProps {
    game: Game;
}

function GameCard({ game }: GameCardProps) {
    return (
        <Card.Root borderRadius={30} overflow="hidden">
            <Image src={game.thumbnail} alt={game.title} />
            <Card.Body>
                <Heading fontSize="2xl">{game.title}</Heading>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCard;
