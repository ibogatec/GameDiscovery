import { Box, Button, HStack } from "@chakra-ui/react";
import PlatformSkeleton from "@/components/PlatformSkeleton.tsx";
import PlatformIconList from "@/components/PlatformIconList.tsx";

interface Props {
    platforms?: string[];
    selectedPlatform?: string;
    isLoading: boolean;
    onSelectPlatform?: (platform: string) => void;
}

function PlatformList({ platforms, selectedPlatform, isLoading, onSelectPlatform }: Props) {
    const skeletons = Array.from({ length: 15 }, (_, index) => index);
    let index = 0;

    const handleClick = (platform: string) => {
        onSelectPlatform?.(platform);
    };

    return (
        <>
            {
                <Box key={index} marginLeft={2}>
                    <HStack alignItems="center">
                        <PlatformIconList platforms="all" />
                        <Button
                            marginLeft={1}
                            fontSize='lg'
                            variant='plain'
                            fontWeight={ !selectedPlatform || selectedPlatform === 'all' ? 'bold' : 'normal' }
                            color={ !selectedPlatform || selectedPlatform === 'all' ? 'blue.500' : 'gray.500' }
                            onClick={_ => handleClick('all')}
                        >
                            All Platforms
                        </Button>
                    </HStack>
                </Box>
            }
            { isLoading && skeletons.map(skeleton => <PlatformSkeleton key={skeleton} />) }
            { platforms?.map(platform => {
                index++;
                return (
                    <Box key={index} marginLeft={2}>
                        <HStack alignItems="center">
                            <PlatformIconList platforms={platform} />
                            <Button
                                marginLeft={1}
                                fontSize='lg'
                                variant='plain'
                                fontWeight={ selectedPlatform === platform ? 'bold' : 'normal' }
                                color={ selectedPlatform === platform ? 'blue.500' : 'gray.500' }
                                onClick={_ => handleClick(platform)}
                            >
                                {platform}
                            </Button>
                        </HStack>
                    </Box>
                );
            })}
        </>
    );
}

export default PlatformList;
