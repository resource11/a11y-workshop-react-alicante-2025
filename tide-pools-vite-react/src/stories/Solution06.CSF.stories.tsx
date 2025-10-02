import type { Meta, StoryObj } from "@storybook/react";
import Solution06 from "../solutions/Solution06";

const meta: Meta<typeof Solution06> = {
  title: "CSF Solutions/Solution06 - Accessible Tabs & Accordions",
  component: Solution06,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comprehensive accessible tabs and accordions implementation with proper ARIA patterns, keyboard navigation, and advanced interaction models.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showTabsDemo: {
      control: "boolean",
      description: "Display tabs implementation demo",
      defaultValue: true,
    },
    showAccordionDemo: {
      control: "boolean",
      description: "Show accordion implementation demo",
      defaultValue: true,
    },
    highlightKeyboardNav: {
      control: "boolean",
      description: "Highlight keyboard navigation patterns",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsAndAccordionsSolution: Story = {
  args: {
    showTabsDemo: true,
    showAccordionDemo: true,
    highlightKeyboardNav: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete accessible tabs and accordions solution with ARIA patterns.",
      },
    },
  },
};

export const TabsDemo: Story = {
  args: {
    showTabsDemo: true,
    showAccordionDemo: false,
    highlightKeyboardNav: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of accessible tabs with keyboard navigation.",
      },
    },
  },
};

export const AccordionDemo: Story = {
  args: {
    showTabsDemo: false,
    showAccordionDemo: true,
    highlightKeyboardNav: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of accessible accordions with proper ARIA.",
      },
    },
  },
};
