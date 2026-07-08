import * as React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

function GameCardContainer({ children }: Props) {
    return (
        <Box borderRadius={32} overflow="hidden" height={450}>
            {children}
        </Box>
    );
}

export default GameCardContainer;
