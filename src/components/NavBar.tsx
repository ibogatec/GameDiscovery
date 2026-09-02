import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "@/components/SearchInput.tsx";

interface Props {
    onSearchChange?: (searchTerm?: string) => void;
}

function NavBar({ onSearchChange }: Props) {
    return (
        <HStack justifyContent="space-between" px="4">
            <Image src={logo} alt="Logo" boxSize="64px" />
            <SearchInput onSearchChange={onSearchChange} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;
