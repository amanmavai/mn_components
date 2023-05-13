import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "radio",
      options: ["tw-btn-primary", "tw-btn-secondary", "tw-btn-accent"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button Primary",
    className: "tw-btn-primary",
  },
};
