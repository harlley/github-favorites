import { useQuery } from "@apollo/client";
import { useSearchParams } from "react-router-dom";
import { REPOS_BY_NAME } from "../../data/queries";
import { useEffect, useState } from "react";
import { Box, TextField } from "@mui/material";
import { debounce } from "@mui/material/utils";
import { Repository } from "../Repository/Repository";

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
        fullWidth
        sx={{ mb: 2 }}
      />
      {!loading ? (
        <>
          {repositories.map((repo: any) => (
            <Box marginBottom={2}>
              <Repository
                key={repo.id}
                name={repo.name}
                description={repo.description}
                url={repo.url}
                owner={repo.owner}
              />
            </Box>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
