import { useFavorites } from "../../data/useFavorites";
import { useNavigate } from "react-router-dom";
import { Repository } from "../Repository/Repository";
import { Stack } from "@mui/material";

export function Favorites() {
  const { repositories } = useFavorites();
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/search")}>Search</button>
      <h1>Favorites Repositories</h1>
      <Stack spacing={1}>
        {repositories.map((repo) => (
          <Repository key={repo.id} {...repo} />
        ))}
      </Stack>
    </div>
  );
}
