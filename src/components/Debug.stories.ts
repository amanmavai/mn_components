import type { Meta, StoryObj } from "@storybook/react";
import { Debug } from "./Debug";

const meta = {
  component: Debug,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Debug>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    o: { top: "top", down: { nest: "nest" } },
  },
};
