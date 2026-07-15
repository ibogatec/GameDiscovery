import {Box, HStack, Text} from "@chakra-ui/react";
import PlatformSkeleton from "@/components/PlatformSkeleton.tsx";
import PlatformIconList from "@/components/PlatformIconList.tsx";

interface Props {
    platforms?: string[];
    isLoading: boolean;
}

function PlatformList({ platforms, isLoading }: Props) {
    const skeletons = Array.from({ length: 15 }, (_, index) => index);
    let index = 0;
    return (
        <>
            { isLoading && skeletons.map(skeleton => <PlatformSkeleton key={skeleton} />) }
            { platforms?.map(platform => {
                index++;
                return (
                    <Box key={index} marginLeft={2}>
                        <HStack alignItems="center">
                            <PlatformIconList platforms={platform} />
                            <Text marginLeft={1}>{platform}</Text>
                        </HStack>
                    </Box>
                );
            })}
        </>
    );
}

export default PlatformList;
