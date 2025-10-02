import type { Meta, StoryObj } from "@storybook/react";
import Exercise10 from "../exercises/Exercise10";

const meta: Meta<typeof Exercise10> = {
  title: "CSF Exercises/Exercise10 - Advanced Testing Scenarios",
  component: Exercise10,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing comprehensive accessibility testing across complex applications and user scenarios.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showTestingScenarios: {
      control: "boolean",
      description: "Display advanced testing scenarios",
      defaultValue: true,
    },
    showAutomationTools: {
      control: "boolean",
      description: "Show automation testing tools",
      defaultValue: true,
    },
    enableLiveTesting: {
      control: "boolean",
      description: "Enable live testing demonstrations",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AdvancedTestingExercise: Story = {
  args: {
    showTestingScenarios: true,
    showAutomationTools: true,
    enableLiveTesting: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise covering advanced testing scenarios and comprehensive accessibility validation.",
      },
    },
  },
};

export const TestingScenariosDemo: Story = {
  args: {
    showTestingScenarios: true,
    showAutomationTools: false,
    enableLiveTesting: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on complex accessibility testing scenarios and edge cases.",
      },
    },
  },
};

export const AutomationToolsDemo: Story = {
  args: {
    showTestingScenarios: false,
    showAutomationTools: true,
    enableLiveTesting: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Focus on automation testing tools and integration strategies.",
      },
    },
  },
};
