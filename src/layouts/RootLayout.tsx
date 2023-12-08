import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
} from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { Search, Favorite } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export function RootLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // memoized only because it is used on the useEffect below
  const pages = useMemo(
    () => [
      { index: 0, path: "/search", label: "Search", icon: <Search /> },
      { index: 1, path: "/favorites", label: "Favorites", icon: <Favorite /> },
    ],
    []
  );

  const [selectedPage, setSelectedPage] = useState(
    pages.find((page) => page.path === pathname)?.index || 0
  );

  useEffect(() => {
    setSelectedPage(pages.find((page) => page.path === pathname)?.index || 0);
  }, [pathname, pages]);

  return (
    <Container fixed maxWidth="sm">
      <BottomNavigation
        showLabels
        value={selectedPage}
        onChange={(_, val) => {
          navigate(pages[val].path);
        }}
      >
        {pages.map(({ index, label, icon }) => (
          <BottomNavigationAction key={index} label={label} icon={icon} />
        ))}
      </BottomNavigation>
      <Outlet />
    </Container>
  );
}
