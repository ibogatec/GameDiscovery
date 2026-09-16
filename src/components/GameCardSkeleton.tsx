import { Card, Skeleton, Stack, HStack } from "@chakra-ui/react";

function GameCardSkeleton() {
    return (
        <Card.Root height="100%" width="100%" overflow="hidden" display="flex" flexDirection="column">
            <Skeleton height="220px" width="100%" />
            <Card.Body display="flex" flexDirection="column" justifyContent="space-between" flex="1" p={5} gap={3}>
                <Stack gap={3}>
                    <Skeleton height="24px" width="100%" />
                    <Skeleton height="24px" width="60%" />
                    <HStack justifyContent="left" marginTop={1}>
                        <Skeleton height="20px" width="30%" />
                    </HStack>
                </Stack>
                <HStack justifyContent="flex-end" marginTop={2}>
                    <Skeleton height="28px" width="50%" />
                </HStack>
            </Card.Body>
        </Card.Root>
    );
}

export default GameCardSkeleton;
