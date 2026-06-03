import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";

function GameGrid() {
    const { games, error } = useGames();
    return (
        <div>
            {error && <Text>Name: {error.name}, Message: {error.message}, Code: {error.code}, Status: {error.status}</Text>}
            <ul>
                {games.map(game => <li key={game.id} value={game.title}>{game.title}</li>)}
            </ul>
        </div>
    );
}

export default GameGrid;
