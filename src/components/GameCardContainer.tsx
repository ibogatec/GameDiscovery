import * as React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

function GameCardContainer({ children }: Props) {
    return (
        <Box borderRadius={24} overflow="hidden" height="100%">
            {children}
        </Box>
    );
}

export default GameCardContainer;
