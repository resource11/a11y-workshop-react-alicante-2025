import type { Meta, StoryObj } from "@storybook/react";
import Exercise02 from "../exercises/Exercise02";

const meta: Meta<typeof Exercise02> = {
  title: "CSF Exercises/Exercise02 - Focus Management",
  component: Exercise02,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for implementing proper focus management in modals and interactive components. Learn to trap and restore focus correctly.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showModalDemo: {
      control: "boolean",
      description: "Show the modal demonstration section",
      defaultValue: true,
    },
    showKeyboardHelp: {
      control: "boolean",
      description: "Show keyboard navigation help",
      defaultValue: true,
    },
    enableFocusTrapping: {
      control: "boolean",
      description: "Enable focus trapping demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FocusManagementExercise: Story = {
  args: {
    showModalDemo: true,
    showKeyboardHelp: true,
    enableFocusTrapping: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise showing broken focus management that needs to be fixed with proper focus trapping and restoration.",
      },
    },
  },
};

export const ModalDemo: Story = {
  args: {
    showModalDemo: true,
    showKeyboardHelp: false,
    enableFocusTrapping: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive modal demonstration showing focus management patterns.",
      },
    },
  },
};

export const KeyboardNavigation: Story = {
  args: {
    showModalDemo: false,
    showKeyboardHelp: true,
    enableFocusTrapping: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Focus on keyboard navigation patterns and accessibility instructions.",
      },
    },
  },
};
