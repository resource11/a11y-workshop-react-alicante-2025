import type { Meta, StoryObj } from "@storybook/react";
import Exercise08 from "../exercises/Exercise08";

const meta: Meta<typeof Exercise08> = {
  title: "CSF Exercises/Exercise08 - Performance Optimization",
  component: Exercise08,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Practice exercise for optimizing accessibility performance without sacrificing user experience or compliance.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showPerformanceMetrics: {
      control: "boolean",
      description: "Display performance optimization examples",
      defaultValue: true,
    },
    showAccessibilityImpact: {
      control: "boolean",
      description: "Show accessibility performance impact",
      defaultValue: true,
    },
    enableOptimizations: {
      control: "boolean",
      description: "Enable performance optimization demos",
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PerformanceOptimizationExercise: Story = {
  args: {
    showPerformanceMetrics: true,
    showAccessibilityImpact: true,
    enableOptimizations: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complete exercise covering accessibility performance optimization techniques and best practices.",
      },
    },
  },
};

export const PerformanceMetricsDemo: Story = {
  args: {
    showPerformanceMetrics: true,
    showAccessibilityImpact: false,
    enableOptimizations: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Focus on performance metrics and optimization strategies.",
      },
    },
  },
};

export const AccessibilityImpactDemo: Story = {
  args: {
    showPerformanceMetrics: false,
    showAccessibilityImpact: true,
    enableOptimizations: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Focus on how performance optimizations affect accessibility.",
      },
    },
  },
};
