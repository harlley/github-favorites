import { useQuery } from "@apollo/client";
import { useNavigate, useSearchParams } from "react-router-dom";
import { REPOS_BY_NAME } from "../../data/queries";
import { useEffect, useState } from "react";
import { Stack, TextField } from "@mui/material";
import { debounce } from "@mui/material/utils";
import { Repository } from "../Repository/Repository";
import { useFavorites } from "../../data/useFavorites";

export function Search() {
  const [repoName, setRepoName] = useState("react");
  const [searchParams, setSearchParams] = useSearchParams();
  const { repositories: repos } = useFavorites();
  const navigate = useNavigate();

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
      <button onClick={() => navigate("/favorites")}>Favorites</button>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
      <h1>Public Repositories</h1>
      <TextField
        id="outlined-required"
        label="Search by"
        onChange={(e) => onChangeSearchTerm(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      {!loading ? (
        <Stack spacing={1}>
          {repositories.map((repo: any) => (
            <Repository
              key={repo.id}
              name={repo.name}
              description={repo.description}
              url={repo.url}
              owner={repo.owner}
            />
          ))}
        </Stack>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
