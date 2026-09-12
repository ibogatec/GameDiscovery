import { Image } from "@chakra-ui/react";
import bullsEye from "@/assets/bulls-eye.webp";
import thumbsUp from "@/assets/thumbs-up.webp";
import meh from "@/assets/meh.webp";
import type { ImageProps } from "@chakra-ui/react";

interface Props {
  users?: number;
}

function Emoji({ users }: Props) {
    if (!users) {
        return null;
    }
    const rating = users > 100000 ? 1 : users > 20000 ? 2 : 3;
    const emojiMap: { [key: number]: ImageProps } = {
        3: {src: meh, alt: "meh", boxSize: "24px"},
        2: {src: thumbsUp, alt: "recommended", boxSize: "24px"},
        1: {src: bullsEye, alt: "exceptional", boxSize: "32px"},
    };
    return (
        <Image {...emojiMap[rating]} />
    );
}

export default Emoji;
