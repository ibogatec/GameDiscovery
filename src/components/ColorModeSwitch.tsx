import { Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode.tsx";

function ColorModeSwitch() {
    const { colorMode, setColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    return (
        <Switch.Root
            checked={isDark}
            onCheckedChange={({ checked }) =>
                setColorMode(checked ? "dark" : "light")
            }
            size="sm">
            <Switch.HiddenInput />

            <Switch.Control
                bg="gray.400"
                _checked={{ bg: "green.600" }}>
                <Switch.Thumb
                    bg="white"
                    _checked={{ bg: "white" }}
                    transitionProperty="translate"
                    transitionDuration="0.3s"
                    transitionTimingFunction="ease-in-out"/>
            </Switch.Control>

            <Switch.Label textWrap="nowrap">
                {isDark ? "Dark mode" : "Light mode"}
            </Switch.Label>
        </Switch.Root>
    );
}

export default ColorModeSwitch;
