import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <div>
      <h1>RootLayout</h1>
      <Outlet />
    </div>
  );
}
