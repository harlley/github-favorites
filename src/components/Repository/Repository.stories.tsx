import type { Meta, StoryObj } from "@storybook/react";

import { Repository } from "./Repository";

const meta = {
  title: "Components/Repository",
  component: Repository,
} satisfies Meta<typeof Repository>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
