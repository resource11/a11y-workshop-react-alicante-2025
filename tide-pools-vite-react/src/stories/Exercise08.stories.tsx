import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Exercise08 from "../exercises/Exercise08";

const meta: Meta = {
  title: "Exercises/08 — Theme Toggle",
  component: Exercise08,
};
export default meta;
type Story = StoryObj<typeof Exercise08>;

export const Broken: Story = {
  render: () => <Exercise08 />,
};

export const BrokenToggleExample: Story = {
  render: () => {
    const [isDark, setIsDark] = React.useState(false);
    return (
      <div
        style={{
          backgroundColor: isDark ? "#121212" : "#ffffff",
          color: isDark ? "#ffffff" : "#333333",
          padding: "20px",
          minHeight: "200px",
        }}
      >
        <h2>Broken Theme Toggle</h2>
        <span
          onClick={() => setIsDark(!isDark)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
        <p style={{ marginTop: "16px" }}>
          Theme toggle without proper ARIA support
        </p>
      </div>
    );
  },
};

export const FixedToggleExample: Story = {
  render: () => {
    const [isDark, setIsDark] = React.useState(false);
    return (
      <div
        style={{
          backgroundColor: isDark ? "#121212" : "#ffffff",
          color: isDark ? "#ffffff" : "#333333",
          padding: "20px",
          minHeight: "200px",
        }}
      >
        <h2>Fixed Theme Toggle</h2>
        <button
          onClick={() => setIsDark(!isDark)}
          aria-pressed={isDark}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <p style={{ marginTop: "16px" }}>
          Theme toggle with proper ARIA support
        </p>
      </div>
    );
  },
};
