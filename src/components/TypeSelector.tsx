import { Button, Menu, Box } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    menuTypes: string[];
    selectedType?: string;
    onSelectType?: (type: string) => void;
}

function TypeSelector({ menuTypes, selectedType, onSelectType }: Props) {
    return (
        <Box>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant="outline" bg="bg.panel" borderColor="border" color="fg">
                        {selectedType || 'Select Type'}
                        <BsChevronDown />
                    </Button>
                </Menu.Trigger>

                <Menu.Positioner>
                    <Menu.Content bg="bg.panel" borderColor="border">
                        {menuTypes.map(type => (
                            <Menu.Item
                                key={type}
                                value={type}
                                color="fg"
                                _hover={{ bg: "bg.subtle" }}
                                onClick={_ => onSelectType?.(type)}
                            >
                                {type}
                            </Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Menu.Root>
        </Box>
    );
}

export default TypeSelector;
