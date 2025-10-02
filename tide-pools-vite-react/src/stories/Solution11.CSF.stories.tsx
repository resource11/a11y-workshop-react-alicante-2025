import type { Meta, StoryObj } from "@storybook/react";
import Solution11 from "../solutions/Solution11";

const meta: Meta<typeof Solution11> = {
  title: "CSF Solutions/Solution11 - Comprehensive Accessibility Review",
  component: Solution11,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete accessibility implementation meeting WCAG 2.1 AA standards and European Accessibility Act requirements, bringing together all concepts into a production-ready solution.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showAllFeatures: {
      control: "boolean",
      description: "Display all accessibility features",
      defaultValue: true,
    },
    showCompliance: {
      control: "boolean",
      description: "Show EAA compliance documentation",
      defaultValue: true,
    },
    enableFullDemo: {
      control: "boolean",
      description: "Enable complete interactive demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ComprehensiveReviewSolution: Story = {
  args: {
    showAllFeatures: true,
    showCompliance: true,
    enableFullDemo: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete accessibility review showcasing all workshop concepts and compliance standards.",
      },
    },
  },
};

export const FullInteractiveDemo: Story = {
  args: {
    showAllFeatures: true,
    showCompliance: false,
    enableFullDemo: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Full interactive demonstration of the comprehensive accessible application.",
      },
    },
  },
};

export const ComplianceDocumentation: Story = {
  args: {
    showAllFeatures: false,
    showCompliance: true,
    enableFullDemo: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete EAA and WCAG compliance documentation and accessibility standards adherence.",
      },
    },
  },
};
