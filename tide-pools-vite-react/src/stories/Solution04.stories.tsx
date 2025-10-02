import type { Meta, StoryObj } from "@storybook/react";
import Solution04 from "../solutions/Solution04";

const meta: Meta<typeof Solution04> = {
  title: "Solutions/Solution04 - Routing & Focus Management",
  component: Solution04,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Accessible routing implementation with focus management, skip links, proper ARIA current indicators, and seamless navigation for screen reader users.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showSkipLinks: {
      control: "boolean",
      description: "Show skip links for keyboard navigation",
      defaultValue: true,
    },
    showFocusManagement: {
      control: "boolean",
      description: "Demonstrate focus management on route changes",
      defaultValue: true,
    },
    highlightCurrentPage: {
      control: "boolean",
      description: "Visually highlight current page indicators",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RoutingAndFocusSolution: Story = {
  args: {
    showSkipLinks: true,
    showFocusManagement: true,
    highlightCurrentPage: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete routing accessibility solution with focus management and skip links.",
      },
    },
  },
};

export const SkipLinksDemo: Story = {
  args: {
    showSkipLinks: true,
    showFocusManagement: false,
    highlightCurrentPage: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstration of skip links and keyboard navigation shortcuts.",
      },
    },
  },
};

export const FocusManagementDemo: Story = {
  args: {
    showSkipLinks: false,
    showFocusManagement: true,
    highlightCurrentPage: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Solution focused on focus management during route transitions.",
      },
    },
  },
};
