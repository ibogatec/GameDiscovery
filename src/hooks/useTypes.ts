import { useState } from "react";

function useTypes() {
    const [selectedType, setSelectedType] = useState<string>('');
    return { selectedType, setSelectedType };
}

export default useTypes;
