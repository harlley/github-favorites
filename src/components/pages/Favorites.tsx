import { useFavorites } from "../../data/useFavorites";
import { Repository } from "../Repository/Repository";
import { Stack, Typography } from "@mui/material";

export function Favorites() {
  const { repositories } = useFavorites();

  return (
    <div>
      <Typography variant="h6" component="h1" sx={{ mb: 1 }}>
        Favorites
      </Typography>
      <Stack spacing={1}>
        {repositories.map((repo) => (
          <Repository key={repo.id} {...repo} />
        ))}
      </Stack>
    </div>
  );
}
