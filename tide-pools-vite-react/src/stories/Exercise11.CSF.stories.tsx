import type { Meta, StoryObj } from "@storybook/react";
import Exercise11 from "../exercises/Exercise11";

const meta: Meta<typeof Exercise11> = {
  title: "CSF Exercises/Exercise11 - Complete Implementation",
  component: Exercise11,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Final comprehensive exercise putting together all accessibility concepts into a complete, production-ready implementation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showComprehensiveDemo: {
      control: "boolean",
      description: "Display comprehensive implementation demo",
      defaultValue: true,
    },
    showAllConcepts: {
      control: "boolean",
      description: "Show all accessibility concepts integration",
      defaultValue: true,
    },
    enableFullInteraction: {
      control: "boolean",
      description: "Enable full interactive demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CompleteImplementationExercise: Story = {
  args: {
    showComprehensiveDemo: true,
    showAllConcepts: true,
    enableFullInteraction: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Final exercise demonstrating complete accessibility implementation with all concepts integrated.",
      },
    },
  },
};

export const ConceptsIntegrationDemo: Story = {
  args: {
    showComprehensiveDemo: false,
    showAllConcepts: true,
    enableFullInteraction: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on how all accessibility concepts work together in a complete implementation.",
      },
    },
  },
};

export const FullInteractiveDemo: Story = {
  args: {
    showComprehensiveDemo: true,
    showAllConcepts: false,
    enableFullInteraction: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete interactive demonstration of the final accessible application.",
      },
    },
  },
};
