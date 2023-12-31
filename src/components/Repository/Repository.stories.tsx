import type { Meta, StoryObj } from "@storybook/react";
import { Repository } from "./Repository";
import { FavoritesProvider } from "../../data/useFavorites";
import { withRouter } from "storybook-addon-react-router-v6";

const meta = {
  title: "Components/Repository",
  component: Repository,
  decorators: [
    (Story) => (
      <div>
        <FavoritesProvider>
          <Story />
        </FavoritesProvider>
      </div>
    ),
    withRouter,
  ],
} satisfies Meta<typeof Repository>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "XXXXXXXXXXXXXXXXXX",
    name: "vite",
    description: "Next generation frontend tooling. It's fast!",
    url: "https://github.com/typescript-cheatsheets/react",
    owner: {
      login: "vitejs",
      avatarUrl:
        "https://avatars.githubusercontent.com/u/3249653?u=6ef55d1ab1360e9761b6663cc9f2f530fadb0dce&v=4",
    },
  },
};
