import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Exercise10 from "../exercises/Exercise10";

const meta: Meta = {
  title: "Exercises/10 — Testing & Automation",
  component: Exercise10,
};
export default meta;
type Story = StoryObj<typeof Exercise10>;

export const Broken: Story = {
  render: () => <Exercise10 />,
};

export const TestableElements: Story = {
  name: "Elements for Testing",
  render: () => (
    <main>
      <h2>Elements for Accessibility Testing</h2>

      {/* Poor contrast */}
      <div
        style={{
          color: "#ccc",
          backgroundColor: "#fff",
          padding: "12px",
          marginBottom: "16px",
        }}
      >
        This text has poor contrast (should fail axe-core)
      </div>

      {/* Missing label */}
      <div style={{ marginBottom: "16px" }}>
        <input type="email" placeholder="Email without label" />
      </div>

      {/* Non-semantic button */}
      <div style={{ marginBottom: "16px" }}>
        <span
          onClick={() => alert("Clicked!")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Fake Button (span)
        </span>
      </div>

      {/* Image without alt */}
      <div
        style={{
          width: "100px",
          height: "60px",
          backgroundColor: "#ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🖼️ No Alt Text
      </div>
    </main>
  ),
};

export const AccessibleElements: Story = {
  name: "Accessible Elements",
  render: () => (
    <main>
      <h2>Accessible Elements (Should Pass Tests)</h2>

      {/* Good contrast */}
      <div
        style={{
          color: "#333",
          backgroundColor: "#fff",
          padding: "12px",
          marginBottom: "16px",
          border: "1px solid #ddd",
        }}
      >
        This text has good contrast (should pass axe-core)
      </div>

      {/* Proper label */}
      <div style={{ marginBottom: "16px" }}>
        <label htmlFor="accessible-email">Email Address:</label>
        <input id="accessible-email" type="email" />
      </div>

      {/* Semantic button */}
      <div style={{ marginBottom: "16px" }}>
        <button
          onClick={() => alert("Clicked!")}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Proper Button
        </button>
      </div>

      {/* Image with alt */}
      <img
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTAwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjZGRkIi8+Cjx0ZXh0IHg9IjUwIiB5PSIzNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KICA8L3N2Zz4K"
        alt="Sample image with proper alternative text"
        style={{ display: "block" }}
      />
    </main>
  ),
};
