import type { Meta, StoryObj } from "@storybook/react";
import Exercise03 from "../exercises/Exercise03";

const meta: Meta<typeof Exercise03> = {
  title: "Exercises/Exercise03 - Form Accessibility",
  component: Exercise03,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for creating accessible forms with proper labels, error handling, and validation feedback.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FormAccessibilityExercise: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise showing broken form implementation that needs accessible labels, validation, and error handling.",
      },
    },
  },
};

export const FormPatterns: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Reference for accessible form patterns and validation techniques.",
      },
    },
  },
};
