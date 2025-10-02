import type { Meta, StoryObj } from "@storybook/react";
import Exercise05 from "../exercises/Exercise05";

const meta: Meta<typeof Exercise05> = {
  title: "CSF Exercises/Exercise05 - Accessibility Testing",
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
  argTypes: {
    showAutomatedTests: {
      control: "boolean",
      description: "Show automated testing examples",
      defaultValue: true,
    },
    showManualTests: {
      control: "boolean",
      description: "Show manual testing guidelines",
      defaultValue: true,
    },
    enableLiveValidation: {
      control: "boolean",
      description: "Enable live accessibility validation",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AccessibilityTestingExercise: Story = {
  args: {
    showAutomatedTests: true,
    showManualTests: true,
    enableLiveValidation: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise covering automated and manual accessibility testing techniques and tools.",
      },
    },
  },
};

export const AutomatedTestingDemo: Story = {
  args: {
    showAutomatedTests: true,
    showManualTests: false,
    enableLiveValidation: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on automated accessibility testing tools and integration strategies.",
      },
    },
  },
};

export const ManualTestingDemo: Story = {
  args: {
    showAutomatedTests: false,
    showManualTests: true,
    enableLiveValidation: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on manual testing methodologies and accessibility evaluation techniques.",
      },
    },
  },
};
