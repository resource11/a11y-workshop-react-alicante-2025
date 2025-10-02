import type { Meta, StoryObj } from "@storybook/react";
import Solution03 from "../solutions/Solution03";

const meta: Meta<typeof Solution03> = {
  title: "CSF Solutions/Solution03 - Form Accessibility",
  component: Solution03,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Accessible form implementation with proper labels, validation feedback, error handling, and ARIA attributes for enhanced user experience.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showValidationDemo: {
      control: "boolean",
      description: "Show form validation demonstration",
      defaultValue: true,
    },
    showErrorStates: {
      control: "boolean",
      description: "Display form error states and handling",
      defaultValue: true,
    },
    highlightLabels: {
      control: "boolean",
      description: "Visually highlight label associations for demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FormAccessibilitySolution: Story = {
  args: {
    showValidationDemo: true,
    showErrorStates: true,
    highlightLabels: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete form accessibility solution showing proper labels, validation, and error handling.",
      },
    },
  },
};

export const ValidationDemo: Story = {
  args: {
    showValidationDemo: true,
    showErrorStates: false,
    highlightLabels: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive demonstration of accessible form validation patterns.",
      },
    },
  },
};

export const LabelAssociations: Story = {
  args: {
    showValidationDemo: false,
    showErrorStates: false,
    highlightLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Solution focused on proper label associations and programmatic relationships.",
      },
    },
  },
};
