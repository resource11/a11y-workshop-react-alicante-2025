import type { Meta, StoryObj } from "@storybook/react";
import Solution10 from "../solutions/Solution10";

const meta: Meta<typeof Solution10> = {
  title: "CSF Solutions/Solution10 - Accessibility Testing & Automation",
  component: Solution10,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Advanced accessibility testing implementation with automated validation, continuous monitoring, comprehensive test suites, and CI/CD integration.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showAutomation: {
      control: "boolean",
      description: "Display test automation examples",
      defaultValue: true,
    },
    showValidation: {
      control: "boolean",
      description: "Show validation and monitoring tools",
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

export const AccessibilityTestingSolution: Story = {
  args: {
    showAutomation: true,
    showValidation: true,
    enableLiveTesting: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete accessibility testing solution with automation and continuous monitoring.",
      },
    },
  },
};

export const TestAutomationDemo: Story = {
  args: {
    showAutomation: true,
    showValidation: false,
    enableLiveTesting: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of accessibility test automation tools.",
      },
    },
  },
};

export const ValidationMonitoringDemo: Story = {
  args: {
    showAutomation: false,
    showValidation: true,
    enableLiveTesting: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of accessibility validation and continuous monitoring.",
      },
    },
  },
};
