import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Link } from "@mui/material";

type RepositoryProps = {
  name: string;
  description: string;
  url: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
};

export function Repository({ name, description, owner, url }: RepositoryProps) {
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
        <CardActions>
          <Button size="small">Favorite</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
