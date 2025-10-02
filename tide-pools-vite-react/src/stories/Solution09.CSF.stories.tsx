import type { Meta, StoryObj } from "@storybook/react";
import Solution09 from "../solutions/Solution09";

const meta: Meta<typeof Solution09> = {
  title: "CSF Solutions/Solution09 - Reduced Motion & Animation",
  component: Solution09,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comprehensive respectful animation implementation that honors user motion preferences, provides alternatives, and ensures accessibility without sacrificing visual appeal.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showAnimations: {
      control: "boolean",
      description: "Display animation examples",
      defaultValue: true,
    },
    honorReducedMotion: {
      control: "boolean",
      description: "Honor prefers-reduced-motion setting",
      defaultValue: true,
    },
    showAlternatives: {
      control: "boolean",
      description: "Show animation alternatives for reduced motion",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ReducedMotionSolution: Story = {
  args: {
    showAnimations: true,
    honorReducedMotion: true,
    showAlternatives: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete reduced motion solution respecting user preferences for animations.",
      },
    },
  },
};

export const AnimationAlternatives: Story = {
  args: {
    showAnimations: false,
    honorReducedMotion: true,
    showAlternatives: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of accessible animation alternatives for users with motion sensitivity.",
      },
    },
  },
};

export const MotionPreferencesDemo: Story = {
  args: {
    showAnimations: true,
    honorReducedMotion: false,
    showAlternatives: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration showing the difference between full and reduced motion.",
      },
    },
  },
};
