import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import PlatformList from "@/components/PlatformList.tsx";
import useGames from "@/hooks/useGames.ts";
import usePlatforms from "@/hooks/usePlatforms.ts";

function App() {
    const { games, error, isLoading } = useGames();
    const { selectedPlatform, setSelectedPlatform } = usePlatforms();
    const platforms = [
        ...new Set(
            games.flatMap(game => game.platforms
                .toLocaleLowerCase()
                .split(',')
                .map(platform => platform.trim())
                .filter(Boolean))
        )
    ];
    const gamesForPlatform = games.filter(game => {
        if (!selectedPlatform || selectedPlatform === 'all') {
            return games;
        }
        return game.platforms.toLocaleLowerCase().includes(selectedPlatform);
    });

    const handleSelectPlatform = (platform: string) => {
        setSelectedPlatform(platform);
    };

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

            <GridItem area="aside" hideBelow="lg" paddingTop={8}>
                <PlatformList platforms={platforms} selectedPlatform={selectedPlatform} isLoading={isLoading} onSelectPlatform={handleSelectPlatform} />
            </GridItem>

            <GridItem area="main" padding={8}>
                <GameGrid games={gamesForPlatform} error={error} isLoading={isLoading} />
            </GridItem>
        </Grid>
    );
}

export default App;
