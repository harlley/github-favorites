export type RepositoryType = {
  id: number;
  name: string;
  description: string;
  url: string;
  owner: {
    login: string;
    avatarUrl: string;
  };
};

export type FavoritesContextType = {
  repositories: RepositoryType[];
  favorite: (repository: RepositoryType) => void;
  unfavorite: (repositoryId: number) => void;
};
