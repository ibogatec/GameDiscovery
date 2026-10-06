import { useState } from "react";

function useTypes() {
    const [selectedType, setSelectedType] = useState<string>('all types');
    return { selectedType, setSelectedType };
}

export default useTypes;
