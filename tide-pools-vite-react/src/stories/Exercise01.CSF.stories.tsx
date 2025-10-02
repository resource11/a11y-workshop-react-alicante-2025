import type { Meta, StoryObj } from "@storybook/react";
import Exercise01 from "../exercises/Exercise01";

const meta: Meta<typeof Exercise01> = {
  title: "CSF Exercises/Exercise01 - Semantic HTML Foundations",
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
    highlightLandmarks: {
      control: "boolean",
      description: "Visually highlight semantic landmarks for demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SemanticHTMLExercise: Story = {
  args: {
    showProblems: true,
    showTesting: true,
    highlightLandmarks: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise showing broken semantic structure that needs to be fixed using proper HTML5 landmarks and heading hierarchy.",
      },
    },
  },
};

export const ProblemsOnly: Story = {
  args: {
    showProblems: true,
    showTesting: false,
    highlightLandmarks: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on the accessibility problems that need to be identified and fixed.",
      },
    },
  },
};

export const LandmarksHighlighted: Story = {
  args: {
    showProblems: false,
    showTesting: true,
    highlightLandmarks: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Exercise with semantic landmarks visually highlighted to demonstrate proper structure.",
      },
    },
  },
};
