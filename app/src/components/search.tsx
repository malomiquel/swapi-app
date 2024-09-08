import { useState } from "react";

interface SearchProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  filterItem: (item: T, query: string) => boolean;
  placeholder?: string;
  noResultsMessage?: string;
}

const Search = <T,>({
  items,
  renderItem,
  filterItem,
  placeholder = "Search...",
  noResultsMessage = "No results found."
}: SearchProps<T>) => {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) => filterItem(item, query));

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 mb-4 w-full"
      />
      {filteredItems.length > 0 ? (
        <div>{filteredItems.map(renderItem)}</div>
      ) : (
        <div className="text-gray-500">{noResultsMessage}</div>
      )}
    </div>
  );
};

export default Search;