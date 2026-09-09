import { Badge } from "@chakra-ui/react";

interface GameUsersProps {
    price?: string;
}

function GamePrice({ price }: GameUsersProps) {
    let gamePrice: number | string = parseFloat(price ? price.replace(/[^0-9.]/g, '') : 'N/A');
    gamePrice = Number.isNaN(gamePrice) ? 'N/A' : gamePrice;
    let color = 'red.500';
    let formattedPrice = 'Price N/A';
    if (typeof gamePrice === 'number') {
        color = gamePrice < 10 ? 'green.500' : gamePrice > 50 ? 'blue.500' : 'yellow.500';
        const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
        formattedPrice = formatter.format(gamePrice);
    }
    return (
        <Badge fontSize='lg' padding={2} borderRadius='12px' bg={color} color='black'>{formattedPrice}</Badge>
    );
}

export default GamePrice;
