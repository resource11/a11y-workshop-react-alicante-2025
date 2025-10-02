import type { Meta, StoryObj } from "@storybook/react";
import Exercise03 from "../exercises/Exercise03";

const meta: Meta<typeof Exercise03> = {
  title: "CSF Exercises/Exercise03 - Form Accessibility",
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
  argTypes: {
    showValidation: {
      control: "boolean",
      description: "Show form validation examples",
      defaultValue: true,
    },
    showErrorStates: {
      control: "boolean",
      description: "Show error state demonstrations",
      defaultValue: true,
    },
    highlightLabels: {
      control: "boolean",
      description: "Visually highlight label associations",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FormAccessibilityExercise: Story = {
  args: {
    showValidation: true,
    showErrorStates: true,
    highlightLabels: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise showing broken form implementation that needs accessible labels, validation, and error handling.",
      },
    },
  },
};

export const ValidationDemo: Story = {
  args: {
    showValidation: true,
    showErrorStates: false,
    highlightLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on form validation patterns and accessible feedback mechanisms.",
      },
    },
  },
};

export const LabelAssociations: Story = {
  args: {
    showValidation: false,
    showErrorStates: false,
    highlightLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrate proper label associations and programmatic relationships.",
      },
    },
  },
};
