import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

function NavBar() {
    return (
        <HStack justifyContent="space-between" px="4">
            <Image src={logo} alt="Logo" boxSize="64px" />
            <Text>NavBar</Text>
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
