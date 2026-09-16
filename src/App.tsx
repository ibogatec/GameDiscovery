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
import type Game from "@/dto/game.ts";

function App() {
    const { games, error, isLoading } = useGames();
    const { selectedPlatform, setSelectedPlatform } = usePlatforms();
    const { selectedType, setSelectedType } = useTypes();
    const { selectedSort, setSelectedSort } = useSort();
    const { searchTerm, setSearchTerm } = useSearch();
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
    const sortedGames = filteredGames.sort((a, b) => {
        const sort = selectedSort ? selectedSort : 'title';
        let sortKey = sort.toLocaleLowerCase().trim() === 'price' ? 'worth' : sort.toLocaleLowerCase().trim() as keyof Game;
        let valueA = a[sortKey];
        let valueB = b[sortKey];
        let sortDirection = 0;
        if (sortKey === 'worth') {
            valueA = parseFloat(a[sortKey].replace(/[^0-9.]/g, ''));
            if (!valueA || Number.isNaN(valueA)) {
                valueA = Number.MAX_VALUE;
            }
            valueB = parseFloat(b[sortKey].replace(/[^0-9.]/g, ''));
            if (!valueB || Number.isNaN(valueB)) {
                valueB = Number.MAX_VALUE;
            }
            sortDirection = valueA - valueB;
        } else if (typeof valueA === 'number' && typeof valueB === 'number') {
            sortDirection = valueB - valueA;
        } else if (typeof valueA === 'string' && typeof valueB === 'string') {
            sortDirection = valueA.localeCompare(valueB);
        }
        return sortDirection;
    });
    const searchedGames = sortedGames.filter(game => {
        if (!searchTerm) {
            return true;
        }
        return game.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSelectPlatform = (platform: string) => {
        setSelectedPlatform(platform);
    };
    const handleSelectType = (type: string) => {
        setSelectedType(type);
    };
    const handleSortChange = (sort: string) => {
        setSelectedSort(sort);
    };
    const handleSearchChange = (searchTerm?: string) => {
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
                <PlatformList platforms={platforms} selectedPlatform={selectedPlatform} isLoading={isLoading} onSelectPlatform={handleSelectPlatform} />
            </GridItem>

            <GridItem area="main" padding={8}>
                <HStack marginBottom={4}>
                    <GameHeading title={selectedPlatform} />
                </HStack>
                <HStack gap={4} marginBottom={6}>
                    <TypeSelector menuTypes={menuTypes} selectedType={selectedType} onSelectType={handleSelectType} />
                    <SortSelector selectedSort={selectedSort} onSortChange={handleSortChange} />
                </HStack>
                <GameGrid games={searchedGames} error={error} isLoading={isLoading} searchTerm={searchTerm} />
            </GridItem>
        </Grid>
    );
}

export default App;
