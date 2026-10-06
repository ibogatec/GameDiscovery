import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import PlatformList from "@/components/PlatformList.tsx";
import TypeSelector from "@/components/TypeSelector.tsx";
import SortSelector from "@/components/SortSelector.tsx";
import GameHeading from "@/components/GameHeading.tsx";
import useGames from "@/hooks/useGames.ts";
import usePlatforms from "@/hooks/usePlatforms.ts";
import useTypes from "@/hooks/useTypes.ts";
import useSort from "@/hooks/useSort.ts";
import useSearch from "@/hooks/useSearch.ts";

function App() {
    const { selectedPlatform, setSelectedPlatform } = usePlatforms();
    const { selectedType, setSelectedType } = useTypes();
    const { selectedSort, setSelectedSort } = useSort();
    const { searchTerm, setSearchTerm } = useSearch();
    const { filteredGames, platforms, gameTypes, gamesError, areGamesLoading } = useGames(selectedPlatform, selectedType, selectedSort, searchTerm);

    const handleSelectPlatform = (platform: string) => {
        setSelectedPlatform(platform);
    };
    const handleSelectType = (type: string) => {
        setSelectedType(type);
    };
    const handleSortChange = (sort: string) => {
        setSelectedSort(sort);
    };
    const handleSearchChange = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    return (
        <Grid
            bg="bg"
            color="fg"
            minHeight="100vh"
            templateAreas={{
                base: "'nav' 'main'",
                lg: "'nav nav' 'aside main'",
            }}
            templateColumns={{
                base: "1fr",
                lg: "256px 1fr",
            }}
            templateRows="auto 1fr"
        >
            <GridItem area="nav">
                <NavBar onSearchChange={handleSearchChange} />
            </GridItem>

            <GridItem area="aside" hideBelow="lg" paddingTop={8}>
                <PlatformList platforms={platforms} selectedPlatform={selectedPlatform} isLoading={areGamesLoading} onSelectPlatform={handleSelectPlatform} />
            </GridItem>

            <GridItem area="main" padding={8}>
                <HStack marginBottom={4}>
                    <GameHeading title={selectedPlatform} />
                </HStack>
                <HStack gap={4} marginBottom={6}>
                    <TypeSelector menuTypes={gameTypes} selectedType={selectedType} onSelectType={handleSelectType} />
                    <SortSelector selectedSort={selectedSort} onSortChange={handleSortChange} />
                </HStack>
                <GameGrid games={filteredGames} error={gamesError} isLoading={areGamesLoading} searchTerm={searchTerm} />
            </GridItem>
        </Grid>
    );
}

export default App;
