import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <Container fixed>
      <Outlet />
    </Container>
  );
}
