import { Badge } from "@chakra-ui/react";

interface GameUsersProps {
    users: number;
}

function GameUsers({ users }: GameUsersProps) {
    const color = users > 100000 ? 'green.500': users > 20000 ? 'yellow.500' : 'red.500';
    const formatter = new Intl.NumberFormat('en-US');
    const countUsers = formatter.format(users);
    return (
        <Badge fontSize='lg' padding={2} borderRadius='12px' bg={color} color='black'>{countUsers} users</Badge>
    );
}

export default GameUsers;
