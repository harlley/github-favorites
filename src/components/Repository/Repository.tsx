import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Link, Rating } from "@mui/material";
import { RepositoryType } from "../../types";
import { useFavorites } from "../../data/useFavorites";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Repository(repository: RepositoryType) {
  const { name, description, url, owner, isFavorite, rating } = repository;
  const { favorite, unfavorite, rate } = useFavorites();
  const [, setRating] = useState<number | null>(0);
  const navigate = useNavigate();

  const manageFavorites = () => {
    isFavorite ? unfavorite(repository) : favorite(repository);
    navigate("/favorites");
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Box display="flex">
            <Avatar src={owner.avatarUrl} sx={{ mr: 1 }} />
            <Link href={url}>
              <Typography variant="h5" component="h2">
                {owner.login}/{name}
              </Typography>
            </Link>
          </Box>
          <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" onClick={manageFavorites}>
            {isFavorite ? "Unfavorite it" : "Favorite it"}
          </Button>
          {isFavorite && (
            <Rating
              name="simple-controlled"
              value={rating}
              onChange={(_, val) => {
                setRating(val);
                rate(repository, val || 0);
              }}
            />
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
