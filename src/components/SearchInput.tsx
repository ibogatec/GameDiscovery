import { Input, InputGroup, CloseButton } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
    onSearchChange?: (searchTerm?: string) => void;
}

function SearchInput({ onSearchChange }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const searchTerm = inputRef?.current?.value;
    const handleChange = () => {
        if (inputRef && inputRef.current) {
            onSearchChange?.(inputRef.current.value);
        }
    };
    const handleClearSearch = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.value = "";
            onSearchChange?.("");
        }
    };
    return (
        <InputGroup
            startElement={<BsSearch />}
            endElement={searchTerm ? (<CloseButton size="xs" variant="ghost" color="fg.muted" _hover={{ color: "fg", bg: "bg.muted" }} onClick={handleClearSearch} aria-label="Clear search" />) : undefined}
        >
            <Input ref={inputRef} borderRadius={16} type="text" placeholder="Search for games..." variant="subtle" onChange={handleChange}/>
        </InputGroup>
    );
}

export default SearchInput;
