import { useState } from "react";

function useSearch() {
    const [searchTerm, setSearchTerm] = useState<string>();
    return { searchTerm, setSearchTerm };
}

export default useSearch;
