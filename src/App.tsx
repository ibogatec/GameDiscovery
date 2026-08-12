import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import PlatformList from "@/components/PlatformList.tsx";
import TypeSelector from "@/components/TypeSelector.tsx";
import useGames from "@/hooks/useGames.ts";
import usePlatforms from "@/hooks/usePlatforms.ts";
import useTypes from "@/hooks/useTypes.ts";

function App() {
    const { games, error, isLoading } = useGames();
    const { selectedPlatform, setSelectedPlatform } = usePlatforms();
    const { selectedType, setSelectedType } = useTypes();
    const platforms = [
        ...new Set(
            games.flatMap(game => game.platforms
                .toLocaleLowerCase()
                .split(',')
                .map(platform => platform.trim())
                .filter(Boolean))
        )
    ];
    const menuTypes = [
        'all types',
        ...new Set(games.flatMap(game => game.type.toLocaleLowerCase()).filter(Boolean))
    ];
    const gamesForPlatform = games.filter(game => !selectedPlatform || selectedPlatform === 'all' || game.platforms.toLocaleLowerCase().includes(selectedPlatform));
    const filteredGames = gamesForPlatform.filter(game => !selectedType || selectedType === 'all types' || game.type.toLocaleLowerCase().includes(selectedType));

    const handleSelectPlatform = (platform: string) => {
        setSelectedPlatform(platform);
    };
    const handleSelectType = (type: string) => {
        setSelectedType(type);
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
                <TypeSelector menuTypes={menuTypes} selectedType={selectedType} onSelectType={handleSelectType} />
                <GameGrid games={filteredGames} error={error} isLoading={isLoading} />
            </GridItem>
        </Grid>
    );
}

export default App;
