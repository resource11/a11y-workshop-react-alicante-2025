import type { Meta, StoryObj } from "@storybook/react";
import Solution02 from "../solutions/Solution02";

const meta: Meta<typeof Solution02> = {
  title: "CSF Solutions/Solution02 - Focus Management",
  component: Solution02,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Accessible focus management implementation with proper focus trapping, restoration, and keyboard navigation patterns for modals and interactive components.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showKeyboardHelp: {
      control: "boolean",
      description: "Show keyboard navigation instructions",
      defaultValue: true,
    },
    demonstrateFocusTrap: {
      control: "boolean",
      description: "Enable focus trap demonstration mode",
      defaultValue: false,
    },
    showFocusIndicators: {
      control: "boolean",
      description: "Enhance focus indicators for demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FocusManagementSolution: Story = {
  args: {
    showKeyboardHelp: true,
    demonstrateFocusTrap: false,
    showFocusIndicators: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete focus management solution showing proper focus trapping and restoration in modals.",
      },
    },
  },
};

export const FocusTrapDemo: Story = {
  args: {
    showKeyboardHelp: false,
    demonstrateFocusTrap: true,
    showFocusIndicators: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of focus trap behavior with enhanced visual indicators.",
      },
    },
  },
};

export const KeyboardNavigation: Story = {
  args: {
    showKeyboardHelp: true,
    demonstrateFocusTrap: false,
    showFocusIndicators: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Solution focused on keyboard navigation patterns and accessibility instructions.",
      },
    },
  },
};
