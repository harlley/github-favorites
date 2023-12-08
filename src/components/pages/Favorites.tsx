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
      {repositories.length > 0 ? (
        <Stack spacing={1}>
          {repositories.map((repo) => (
            <Repository key={repo.id} {...repo} />
          ))}
        </Stack>
      ) : (
        <Typography sx={{ mt: 1 }} color="text.secondary">
          You don't have any favorite repository yet.
        </Typography>
      )}
    </div>
  );
}
