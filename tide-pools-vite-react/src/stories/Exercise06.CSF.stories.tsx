import type { Meta, StoryObj } from "@storybook/react";
import Exercise06 from "../exercises/Exercise06";

const meta: Meta<typeof Exercise06> = {
  title: "CSF Exercises/Exercise06 - Advanced Accessibility Patterns",
  component: Exercise06,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing advanced accessibility patterns including complex widgets and interaction models.",
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

export const AdvancedPatternsExercise: Story = {
  args: {
    showTabsDemo: true,
    showAccordionDemo: true,
    highlightKeyboardNav: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise covering advanced accessibility patterns and complex interactive components.",
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
          "Focus on accessible tabs implementation with keyboard navigation.",
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
          "Focus on accessible accordion patterns and ARIA implementation.",
      },
    },
  },
};
