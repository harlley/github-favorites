export type RepositoryType = {
  id: number;
  name: string;
  description: string;
  url: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  isFavorite?: boolean;
};

export type FavoritesContextType = {
  repositories: RepositoryType[];
  favorite: (repository: RepositoryType) => void;
  unfavorite: (repository: RepositoryType) => void;
};
