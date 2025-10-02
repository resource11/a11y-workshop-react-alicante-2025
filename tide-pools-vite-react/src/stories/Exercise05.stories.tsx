import type { Meta, StoryObj } from "@storybook/react";
import Exercise05 from "../exercises/Exercise05";

const meta: Meta<typeof Exercise05> = {
  title: "Exercises/Exercise05 - Accessibility Testing",
  component: Exercise05,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing comprehensive accessibility testing strategies and automated testing tools.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AccessibilityTestingExercise: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise covering automated and manual accessibility testing techniques and tools.",
      },
    },
  },
};

export const TestingTools: Story = {
  parameters: {
    docs: {
      description: {
        story: "Reference for accessibility testing tools and methodologies.",
      },
    },
  },
};
