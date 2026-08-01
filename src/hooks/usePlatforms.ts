import { useState } from "react";

function usePlatform() {
    const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
    return { selectedPlatform, setSelectedPlatform };
}

export default usePlatform;
