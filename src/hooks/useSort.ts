import { useState } from "react";

function useSort() {
    const [selectedSort, setSelectedSort] = useState<string | undefined>('');
    return { selectedSort, setSelectedSort };
}

export default useSort;
