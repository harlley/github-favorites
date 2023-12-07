import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <Container fixed>
      <h1>RootLayout</h1>
      <Outlet />
    </Container>
  );
}
