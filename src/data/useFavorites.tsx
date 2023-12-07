import React, { createContext, useContext, useState, useCallback } from "react";

type Repository = {
  id: number;
  name: string;
  description: string;
  url: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
};

type FavoritesContextProps = {
  repositories: Repository[];
  favorite: (repository: Repository) => void;
  unfavorite: (repositoryId: number) => void;
};

const FavoritesContext = createContext<FavoritesContextProps | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const favorite = useCallback((repository: Repository) => {
    setRepositories((prevRepositories) => [...prevRepositories, repository]);
  }, []);

  const unfavorite = useCallback((repositoryId: number) => {
    setRepositories((prevRepositories) =>
      prevRepositories.filter((repo) => repo.id !== repositoryId)
    );
  }, []);

  const contextValue: FavoritesContextProps = {
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
