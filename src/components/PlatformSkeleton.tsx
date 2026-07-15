import { Skeleton, SkeletonText, HStack, Box } from "@chakra-ui/react";

function PlatformSkeleton() {
    return (
        <Box marginLeft={2}>
            <HStack alignItems="center">
                <Skeleton height={6} width={10} marginY={2} />
                <SkeletonText marginLeft={1} noOfLines={1} height={6} width="80%"  />
            </HStack>
        </Box>
    );
}

export default PlatformSkeleton;
