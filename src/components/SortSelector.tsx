import { Button, Menu, Box } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    selectedSort?: string;
    onSortChange?: (sort: string) => void;
}

function SortSelector({ selectedSort, onSortChange }: Props) {
    const sortTypes = ['Title', 'Users', 'Price', 'Type', 'Status'];
    return (
        <Box>
            <Menu.Root onSelect={e => onSortChange?.(e.value as string)}>
                <Menu.Trigger asChild>
                    <Button variant="outline" colorScheme="teal">
                        Order by: {selectedSort || 'Title'}
                        <BsChevronDown />
                    </Button>
                </Menu.Trigger>

                <Menu.Positioner>
                    <Menu.Content>{sortTypes.map(sort => <Menu.Item key={sort} value={sort}>{sort}</Menu.Item>)}</Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </Box>
    );
}

export default SortSelector;
