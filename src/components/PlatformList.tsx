import { Box, Button, HStack } from "@chakra-ui/react";
import PlatformSkeleton from "@/components/PlatformSkeleton.tsx";
import PlatformIconList from "@/components/PlatformIconList.tsx";

interface Props {
    platforms?: string[];
    isLoading: boolean;
    onSelectPlatform?: (platform: string) => void;
}

function PlatformList({ platforms, isLoading, onSelectPlatform }: Props) {
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
                        <Button marginLeft={1} fontSize='lg' variant='plain' onClick={_ => handleClick('all')}>All Platforms</Button>
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
                            <Button marginLeft={1} fontSize='lg' variant='plain' onClick={_ => handleClick(platform)}>{platform}</Button>
                        </HStack>
                    </Box>
                );
            })}
        </>
    );
}

export default PlatformList;
