import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import PlatformList from "@/components/PlatformList.tsx";
import useGames from "@/hooks/useGames.ts";

function App() {
    const { games, error, isLoading } = useGames();
    const platforms = [
        ...new Set(
            games.flatMap(game => game.platforms
                .toLocaleLowerCase()
                .split(',')
                .map(platform => platform.trim())
                .filter(Boolean))
        )
    ];
    return (
        <Grid
            templateAreas={{
                base: "'nav' 'main'",
                lg: "'nav nav' 'aside main'",
            }}
            templateColumns={{
                base: "1fr",
                lg: "256px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>

            <GridItem area="aside" hideBelow="lg">
                <PlatformList platforms={platforms} isLoading={isLoading} />
            </GridItem>

            <GridItem area="main">
                <GameGrid games={games} error={error} isLoading={isLoading} />
            </GridItem>
        </Grid>
    );
}

export default App;
