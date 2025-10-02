import type { Meta, StoryObj } from "@storybook/react";
import Solution07 from "../solutions/Solution07";

const meta: Meta<typeof Solution07> = {
  title: "CSF Solutions/Solution07 - Accessible Forms & Validation",
  component: Solution07,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comprehensive accessible forms implementation with validation, error handling, live feedback, and complete screen reader support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showValidation: {
      control: "boolean",
      description: "Display form validation examples",
      defaultValue: true,
    },
    showErrorHandling: {
      control: "boolean",
      description: "Show error handling and feedback",
      defaultValue: true,
    },
    enableLiveFeedback: {
      control: "boolean",
      description: "Enable live validation feedback",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FormsAndValidationSolution: Story = {
  args: {
    showValidation: true,
    showErrorHandling: true,
    enableLiveFeedback: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete accessible forms solution with validation and error handling.",
      },
    },
  },
};

export const ValidationDemo: Story = {
  args: {
    showValidation: true,
    showErrorHandling: false,
    enableLiveFeedback: true,
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

export const ErrorHandlingDemo: Story = {
  args: {
    showValidation: false,
    showErrorHandling: true,
    enableLiveFeedback: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstration of accessible error handling and user feedback.",
      },
    },
  },
};
