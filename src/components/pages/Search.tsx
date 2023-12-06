import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { REPOS_BY_NAME } from "../../data/queries";
import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { debounce } from "@mui/material/utils";

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

  if (error) return <p>Error: {error.message}</p>;

  const repositories = data?.search?.nodes || [];

  const onChangeSearchTerm = debounce((value: string) => {
    setRepoName(value);
    setSearchParams({ q: value });
  }, 300);

  return (
    <div>
      <h1>Public Repositories</h1>
      <TextField
        id="outlined-required"
        label="Search by"
        onChange={(e) => onChangeSearchTerm(e.target.value)}
      />
      {!loading ? (
        <ul>
          {repositories.map((repo: any) => (
            <li key={repo.name}>
              {repo.name} by {repo.owner.login}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
