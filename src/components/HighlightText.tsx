interface Props {
    text: string;
    query?: string;
}

function HighlightText({ text, query }: Props) {
    if (!query || !query.trim()) {
        return <>{text}</>;
    }

    // Escape special regex characters in the query
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`(${escapedQuery})`, "gi");

    // Splitting by regex with a capture group retains the matching parts in the array
    const parts = text.split(regex);
    return (
        <>
            {
                parts.map((part, index) =>
                    regex.test(part) ?
                        (<mark key={index} style={{ backgroundColor: "#fef08a", color: "#854d0e", padding: "0 2px", borderRadius: "2px" }}>{part}</mark>)
                        :
                        (part)
            )}
        </>
    );
}

export default HighlightText;
