import type { Meta, StoryObj } from "@storybook/react";
import Exercise04 from "../exercises/Exercise04";

const meta: Meta<typeof Exercise04> = {
  title: "Exercises/Exercise04 - ARIA Implementation",
  component: Exercise04,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing ARIA attributes, live regions, and dynamic content accessibility.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ARIAImplementationExercise: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise showing broken ARIA implementation that needs proper attributes, live regions, and state management.",
      },
    },
  },
};

export const ARIAPatterns: Story = {
  parameters: {
    docs: {
      description: {
        story: "Reference for ARIA patterns and dynamic content accessibility.",
      },
    },
  },
};
