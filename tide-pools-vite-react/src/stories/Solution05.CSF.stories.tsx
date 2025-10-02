import type { Meta, StoryObj } from "@storybook/react";
import Solution05 from "../solutions/Solution05";

const meta: Meta<typeof Solution05> = {
  title: "CSF Solutions/Solution05 - Accessible Modals",
  component: Solution05,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comprehensive accessible modal implementation with focus trapping, ESC key support, proper ARIA attributes, and complete keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showFocusTrap: {
      control: "boolean",
      description: "Demonstrate focus trapping behavior",
      defaultValue: true,
    },
    showKeyboardSupport: {
      control: "boolean",
      description: "Show keyboard navigation support",
      defaultValue: true,
    },
    highlightARIA: {
      control: "boolean",
      description: "Visually highlight ARIA attributes",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AccessibleModalsSolution: Story = {
  args: {
    showFocusTrap: true,
    showKeyboardSupport: true,
    highlightARIA: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete accessible modal solution with focus management and keyboard support.",
      },
    },
  },
};

export const FocusTrapDemo: Story = {
  args: {
    showFocusTrap: true,
    showKeyboardSupport: false,
    highlightARIA: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive demonstration of focus trapping in modal dialogs.",
      },
    },
  },
};

export const KeyboardNavigationDemo: Story = {
  args: {
    showFocusTrap: false,
    showKeyboardSupport: true,
    highlightARIA: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstration of comprehensive keyboard navigation support.",
      },
    },
  },
};
