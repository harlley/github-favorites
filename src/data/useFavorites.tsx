import React, { createContext, useContext, useState, useCallback } from "react";
import { FavoritesContextType, RepositoryType } from "../types";

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);

  const favorite = useCallback((repository: RepositoryType) => {
    setRepositories((prevRepositories) => [...prevRepositories, repository]);
  }, []);

  const unfavorite = useCallback((repositoryId: number) => {
    setRepositories((prevRepositories) =>
      prevRepositories.filter((repo) => repo.id !== repositoryId)
    );
  }, []);

  const contextValue: FavoritesContextType = {
    favorite,
    unfavorite,
    repositories,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
