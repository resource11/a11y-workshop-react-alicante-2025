import type { Meta, StoryObj } from "@storybook/react";
import Exercise09 from "../exercises/Exercise09";

const meta: Meta<typeof Exercise09> = {
  title: "CSF Exercises/Exercise09 - Multi-Component Integration",
  component: Exercise09,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for coordinating accessibility across multiple components and managing complex application state.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showIntegrationDemo: {
      control: "boolean",
      description: "Display multi-component integration demo",
      defaultValue: true,
    },
    showStateManagement: {
      control: "boolean",
      description: "Show accessibility state coordination",
      defaultValue: true,
    },
    enableLiveUpdates: {
      control: "boolean",
      description: "Enable live state update demonstrations",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiComponentIntegrationExercise: Story = {
  args: {
    showIntegrationDemo: true,
    showStateManagement: true,
    enableLiveUpdates: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise covering multi-component accessibility integration and state coordination.",
      },
    },
  },
};

export const IntegrationDemo: Story = {
  args: {
    showIntegrationDemo: true,
    showStateManagement: false,
    enableLiveUpdates: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on multi-component integration patterns and coordination.",
      },
    },
  },
};

export const StateManagementDemo: Story = {
  args: {
    showIntegrationDemo: false,
    showStateManagement: true,
    enableLiveUpdates: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on accessibility state management across component boundaries.",
      },
    },
  },
};
