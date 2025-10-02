import type { Meta, StoryObj } from "@storybook/react";
import Solution04 from "../solutions/Solution04";

const meta: Meta<typeof Solution04> = {
  title: "CSF Solutions/Solution04 - ARIA Implementation",
  component: Solution04,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Accessible ARIA implementation with proper attributes, live regions, dynamic content updates, and comprehensive state management for complex interactive components.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showLiveRegions: {
      control: "boolean",
      description: "Demonstrate ARIA live regions functionality",
      defaultValue: true,
    },
    showStateChanges: {
      control: "boolean",
      description: "Show dynamic state changes and ARIA updates",
      defaultValue: true,
    },
    highlightARIA: {
      control: "boolean",
      description: "Visually highlight ARIA attributes for demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ARIAImplementationSolution: Story = {
  args: {
    showLiveRegions: true,
    showStateChanges: true,
    highlightARIA: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete ARIA implementation solution showing live regions, dynamic content, and proper state management.",
      },
    },
  },
};

export const LiveRegionsDemo: Story = {
  args: {
    showLiveRegions: true,
    showStateChanges: false,
    highlightARIA: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of ARIA live regions and dynamic content announcements.",
      },
    },
  },
};

export const ARIAAttributesDemo: Story = {
  args: {
    showLiveRegions: false,
    showStateChanges: true,
    highlightARIA: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Solution focused on ARIA attributes, roles, and properties with visual highlighting.",
      },
    },
  },
};
