import { Card, Skeleton, Stack, HStack } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Card.Root height="100%" width="100%">
            <Skeleton height={256} width="100%" />
            <Card.Body justifyContent="space-between">
                <Stack gap={3}>
                    <Skeleton height="24px" width="100%" />
                    <Skeleton height="24px" width="60%" />
                </Stack>
                <HStack justifyContent="left" marginTop={2}>
                    <Skeleton height="24px" width="20%" />
                </HStack>
                <HStack justifyContent="right" marginTop={2}>
                    <Skeleton height="30px" width="50%" />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCardSkeleton;
