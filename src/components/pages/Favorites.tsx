import { useFavorites } from "../../data/useFavorites";
import { useNavigate } from "react-router-dom";

export function Favorites() {
  const { repositories, favorite } = useFavorites();
  const navigate = useNavigate();

  const onFavorite = () => {
    const repository = {
      id: 1,
      name: "Sample Repo",
      description: "test",
      url: "https://github.com/sample-repo",
      owner: {
        login: "sample-repo",
        avatarUrl:
          "https://avatars.githubusercontent.com/u/3249653?u=6ef55d1ab1360e9761b6663cc9f2f530fadb0dce&v=4",
      },
    };
    favorite(repository);
  };

  return (
    <div>
      <button onClick={onFavorite}>Add to Favorites</button>
      <pre>{JSON.stringify(repositories, null, 2)}</pre>
      <button onClick={() => navigate("/search")}>Search</button>
    </div>
  );
}
