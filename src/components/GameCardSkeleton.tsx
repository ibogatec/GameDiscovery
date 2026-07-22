import { Card, Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Card.Root height="100%" width="100%">
            <Skeleton height={300} width="100%" />
            <Card.Body justifyContent="space-between">
                <SkeletonText noOfLines={2} gap={4} />
                <HStack justifyContent="space-between" marginTop={6}>
                    <Skeleton height="30px" width="15%" />
                    <Skeleton height="30px" width="25%" />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCardSkeleton;
