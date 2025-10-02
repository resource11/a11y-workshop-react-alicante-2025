import type { Meta, StoryObj } from "@storybook/react";
import Exercise07 from "../exercises/Exercise07";

const meta: Meta<typeof Exercise07> = {
  title: "CSF Exercises/Exercise07 - Complex Interactions",
  component: Exercise07,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for handling complex interactions, multi-component accessibility, and advanced state management.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showFormDemo: {
      control: "boolean",
      description: "Display complex form demonstrations",
      defaultValue: true,
    },
    showErrorHandling: {
      control: "boolean",
      description: "Show error handling patterns",
      defaultValue: true,
    },
    enableLiveFeedback: {
      control: "boolean",
      description: "Enable live validation feedback",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComplexInteractionsExercise: Story = {
  args: {
    showFormDemo: true,
    showErrorHandling: true,
    enableLiveFeedback: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise covering complex interaction patterns and multi-component accessibility coordination.",
      },
    },
  },
};

export const FormComplexityDemo: Story = {
  args: {
    showFormDemo: true,
    showErrorHandling: false,
    enableLiveFeedback: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Focus on complex form interactions and accessibility patterns.",
      },
    },
  },
};

export const ErrorHandlingDemo: Story = {
  args: {
    showFormDemo: false,
    showErrorHandling: true,
    enableLiveFeedback: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on accessible error handling and user feedback mechanisms.",
      },
    },
  },
};
