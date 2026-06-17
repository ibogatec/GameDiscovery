import { type IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiSteam, SiEpicgames, SiPlaystation5, SiPlaystation4, SiIos } from "react-icons/si";
import { FaDesktop, FaXbox, FaItchIo, FaUnlockAlt, FaAndroid } from "react-icons/fa";
import { GiVrHeadset, GiGamepad } from "react-icons/gi";
import { CgGames } from "react-icons/cg";
import { IoGameController } from "react-icons/io5";
import { HStack, Icon } from "@chakra-ui/react";

interface PlatformIconListProps {
    platforms?: string;
}

function PlatformIconList({ platforms }: PlatformIconListProps) {
    const iconMap: { [key: string]: IconType } = {
        "pc": FaDesktop,
        "epic games store": SiEpicgames,
        "drm-free": FaUnlockAlt,
        "steam": SiSteam,
        "android": FaAndroid,
        "ios": SiIos,
        "itch.io": FaItchIo,
        "playstation 5": SiPlaystation5,
        "xbox series x|s": FaXbox,
        "nintendo switch": BsNintendoSwitch,
        "playstation 4": SiPlaystation4,
        "xbox one": CgGames,
        "vr": GiVrHeadset,
        "xbox 360": GiGamepad,
    };

    let index = 0;
    return (
        <HStack marginY={2}>
            {platforms?.split(',').map(platform => {
                index++;
                platform = platform.toLocaleLowerCase().trim();
                const iconComponent = iconMap[platform] ?? IoGameController;
                return <Icon key={index} as={iconComponent} size="lg" color="gray.500"></Icon>
            })}
        </HStack>
    );
}

export default PlatformIconList;
