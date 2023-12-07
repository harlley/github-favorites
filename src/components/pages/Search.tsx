import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { REPOS_BY_NAME } from "../../data/queries";
import { useState } from "react";
import { Skeleton, Stack, TextField } from "@mui/material";
import { debounce } from "@mui/material/utils";
import { Repository } from "../Repository/Repository";
import { RepositoryType } from "../../types";

type RepositoriesData = {
  search: {
    nodes: RepositoryType[];
  };
};

export function Search() {
  const [repoName, setRepoName] = useState("");
  const navigate = useNavigate();

  const { loading, error, data } = useQuery<RepositoriesData>(REPOS_BY_NAME, {
    variables: { repoName },
    skip: !repoName,
  });

  if (error) return <p>Error: {error.message}</p>;

  const repositories = data?.search?.nodes || [];

  const onChangeSearchTerm = debounce((value: string) => {
    setRepoName(value);
  }, 300);

  return (
    <div>
      <button onClick={() => navigate("/favorites")}>Favorites</button>
      <h1>Repositories</h1>
      <TextField
        id="outlined-required"
        label="Search by"
        onChange={(e) => onChangeSearchTerm(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      {!loading ? (
        <Stack spacing={1}>
          {repositories.map((repo: RepositoryType) => (
            <Repository key={repo.id} {...repo} />
          ))}
        </Stack>
      ) : (
        <Stack spacing={1}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              animation="wave"
              height={130}
            />
          ))}
        </Stack>
      )}
    </div>
  );
}
