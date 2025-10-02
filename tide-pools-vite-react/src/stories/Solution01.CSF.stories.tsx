import type { Meta, StoryObj } from "@storybook/react";
import Solution01 from "../solutions/Solution01";

const meta: Meta<typeof Solution01> = {
  title: "CSF Solutions/Solution01 - Semantic HTML",
  component: Solution01,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Accessible semantic HTML implementation with proper landmarks, heading hierarchy, and meaningful elements. This solution demonstrates proper use of HTML5 semantic elements, ARIA landmarks, and structured content for screen readers and assistive technologies.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showExplanation: {
      control: "boolean",
      description: "Show the detailed explanation of accessibility fixes",
      defaultValue: true,
    },
    showCompliance: {
      control: "boolean",
      description: "Show EAA compliance information",
      defaultValue: true,
    },
    highlightLandmarks: {
      control: "boolean",
      description: "Visually highlight semantic landmarks for demonstration",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SemanticHTMLSolution: Story = {
  args: {
    showExplanation: true,
    showCompliance: true,
    highlightLandmarks: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete semantic HTML solution showing proper landmarks, heading hierarchy, and accessible content structure.",
      },
    },
  },
};

export const LandmarksHighlighted: Story = {
  args: {
    showExplanation: false,
    showCompliance: false,
    highlightLandmarks: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Solution with landmarks visually highlighted to demonstrate semantic structure for screen readers.",
      },
    },
  },
};

export const ComplianceView: Story = {
  args: {
    showExplanation: false,
    showCompliance: true,
    highlightLandmarks: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Solution focused on EAA compliance documentation and WCAG guidelines adherence.",
      },
    },
  },
};
