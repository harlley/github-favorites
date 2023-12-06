import { useSearchParams } from "react-router-dom";

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <h1>Search</h1>
      <p>Search query: {searchParams.get("q")}</p>
      <button
        onClick={() => {
          setSearchParams({ q: "test" });
        }}
      >
        Set search query to "test"
      </button>
    </div>
  );
}
