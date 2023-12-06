import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { Search } from "./components/pages/Search";
import { Favorites } from "./components/pages/Favorites";
import { ApolloProvider } from "@apollo/client";
import client from "./data/apollo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="search" element={<Search />} />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
