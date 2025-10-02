import type { Meta, StoryObj } from "@storybook/react";
import Exercise04 from "../exercises/Exercise04";

const meta: Meta<typeof Exercise04> = {
  title: "CSF Exercises/Exercise04 - ARIA Implementation",
  component: Exercise04,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing ARIA attributes, live regions, and dynamic content accessibility.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showLiveRegions: {
      control: "boolean",
      description: "Show live regions examples",
      defaultValue: true,
    },
    showARIAStates: {
      control: "boolean",
      description: "Show ARIA states and properties",
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

export const ARIAImplementationExercise: Story = {
  args: {
    showLiveRegions: true,
    showARIAStates: true,
    highlightARIA: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise showing broken ARIA implementation that needs proper attributes, live regions, and state management.",
      },
    },
  },
};

export const LiveRegionsDemo: Story = {
  args: {
    showLiveRegions: true,
    showARIAStates: false,
    highlightARIA: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Focus on ARIA live regions and dynamic content announcements.",
      },
    },
  },
};

export const ARIAAttributesDemo: Story = {
  args: {
    showLiveRegions: false,
    showARIAStates: true,
    highlightARIA: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrate ARIA states, properties, and roles with visual highlighting.",
      },
    },
  },
};
