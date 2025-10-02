import type { Meta, StoryObj } from "@storybook/react";
import Exercise01 from "../exercises/Exercise01";

const meta: Meta<typeof Exercise01> = {
  title: "Exercises/Exercise01 - Semantic HTML",
  component: Exercise01,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing semantic HTML structure, proper landmarks, and heading hierarchy. Fix the broken implementation to use proper HTML5 elements.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showProblems: {
      control: "boolean",
      description: "Show the accessibility problems section",
      defaultValue: true,
    },
    showTesting: {
      control: "boolean",
      description: "Show the testing instructions section",
      defaultValue: true,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showProblems: true,
    showTesting: true,
  },
};

export const ProblemsOnly: Story = {
  args: {
    showProblems: true,
    showTesting: false,
  },
};

export const TestingOnly: Story = {
  args: {
    showProblems: false,
    showTesting: true,
  },
};
