import type { Meta, StoryObj } from "@storybook/react";
import Exercise02 from "../exercises/Exercise02";

const meta: Meta<typeof Exercise02> = {
  title: "Exercises/Exercise02 - Focus Management",
  component: Exercise02,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing proper focus management in modals and interactive components. Learn to trap and restore focus correctly.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FocusManagementExercise: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise showing broken focus management that needs to be fixed with proper focus trapping and restoration.",
      },
    },
  },
};

export const FocusPatterns: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Reference for focus management patterns covered in this exercise.",
      },
    },
  },
};
