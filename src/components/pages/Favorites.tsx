import { useFavorites } from "../../data/useFavorites";
import { useNavigate } from "react-router-dom";
import { Repository } from "../Repository/Repository";
import { Stack } from "@mui/material";

export function Favorites() {
  const { repositories, favorite } = useFavorites();
  const navigate = useNavigate();

  const onFavorite = () => {
    const repository = {
      id: 1,
      name: "Sample Repo",
      description: "test",
      url: "https://github.com/sample-repo",
      owner: {
        login: "sample-repo",
        avatarUrl:
          "https://avatars.githubusercontent.com/u/3249653?u=6ef55d1ab1360e9761b6663cc9f2f530fadb0dce&v=4",
      },
    };
    favorite(repository);
  };

  return (
    <div>
      <button onClick={onFavorite}>Add to Favorites</button>
      <Stack spacing={1}>
        {repositories.map((repo) => (
          <Repository key={repo.id} {...repo} />
        ))}
      </Stack>
      <button onClick={() => navigate("/search")}>Search</button>
    </div>
  );
}
