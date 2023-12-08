export type RepositoryType = {
  id: string;
  name: string;
  description: string;
  url: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
  isFavorite?: boolean;
  rating?: number;
};

export type FavoritesContextType = {
  repositories: RepositoryType[];
  favorite: (repository: RepositoryType) => void;
  unfavorite: (repository: RepositoryType) => void;
  rate: (repository: RepositoryType, rating: number) => void;
};
