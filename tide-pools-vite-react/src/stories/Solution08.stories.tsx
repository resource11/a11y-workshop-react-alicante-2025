import type { Meta, StoryObj } from "@storybook/react";
import Solution08 from "../solutions/Solution08";

const meta: Meta<typeof Solution08> = {
  title: "Solutions/Solution08 - Theme Toggle & Color Preferences",
  component: Solution08,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comprehensive accessible theming implementation with system preference detection, high contrast preservation, and user preference persistence.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showThemeToggle: {
      control: "boolean",
      description: "Display theme toggle functionality",
      defaultValue: true,
    },
    showPreferences: {
      control: "boolean",
      description: "Show user preference detection",
      defaultValue: true,
    },
    highlightContrast: {
      control: "boolean",
      description: "Highlight contrast and color accessibility features",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemingAndPreferencesSolution: Story = {
  args: {
    showThemeToggle: true,
    showPreferences: true,
    highlightContrast: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete accessible theming solution with preference detection and high contrast support.",
      },
    },
  },
};

export const ThemeToggleDemo: Story = {
  args: {
    showThemeToggle: true,
    showPreferences: false,
    highlightContrast: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of accessible theme toggle functionality.",
      },
    },
  },
};

export const ContrastDemo: Story = {
  args: {
    showThemeToggle: false,
    showPreferences: true,
    highlightContrast: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstration of high contrast mode and color accessibility features.",
      },
    },
  },
};
