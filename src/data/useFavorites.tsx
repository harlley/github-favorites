import React, { createContext, useContext, useState } from "react";
import { FavoritesContextType, RepositoryType } from "../types";

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [repositories, setRepositories] = useState<RepositoryType[]>([]);

  const favorite = (repository: RepositoryType) => {
    setRepositories((prevRepositories) => {
      // avoid duplicated favorites
      if (prevRepositories.find((repo) => repo.id === repository.id)) {
        return prevRepositories;
      }
      return [...prevRepositories, { ...repository, isFavorite: true }];
    });
  };

  const unfavorite = (repository: RepositoryType) => {
    setRepositories((prevRepositories) =>
      prevRepositories.filter((repo) => repo.id !== repository.id)
    );
  };

  const rate = (repository: RepositoryType, rating: number) => {
    setRepositories((prevRepositories) =>
      prevRepositories.map((repo) => {
        if (repo.id === repository.id) {
          return { ...repo, rating };
        }
        return repo;
      })
    );
  };

  const contextValue: FavoritesContextType = {
    favorite,
    unfavorite,
    rate,
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
