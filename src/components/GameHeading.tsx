import { Heading } from '@chakra-ui/react';

interface Props {
    title?: string;
}

function GameHeading({ title = 'Game Heading' }: Props) {
    let displayTitle = `${title.toLocaleUpperCase()} Games`;
    if (!title || title.toLocaleLowerCase() === 'all') {
        displayTitle = 'All Games';
    }
    return (
        <Heading as="h1">{displayTitle}</Heading>
    );
}

export default GameHeading;
