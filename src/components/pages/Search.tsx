import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { REPOS_BY_NAME } from "../../data/queries";
import { useEffect, useState } from "react";

export function Search() {
  const [repoName, setRepoName] = useState("react");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("q")) {
      setRepoName(searchParams.get("q")!);
    }
  }, [searchParams]);

  const { loading, error, data } = useQuery(REPOS_BY_NAME, {
    variables: { repoName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const repositories = data?.search?.nodes || [];

  return (
    <div>
      <h1>Public Repositories</h1>
      <ul>
        {repositories.map((repo: any) => (
          <li key={repo.name}>
            {repo.name} by {repo.owner.login}
          </li>
        ))}
      </ul>
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