import { useState } from "react";

function useSort() {
    const [selectedSort, setSelectedSort] = useState<string>('');
    return { selectedSort, setSelectedSort };
}

export default useSort;
