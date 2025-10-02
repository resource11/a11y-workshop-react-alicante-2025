import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Exercise11 from "../exercises/Exercise11";

const meta: Meta = {
  title: "Exercises/11 — Comprehensive Review",
  component: Exercise11,
};
export default meta;
type Story = StoryObj<typeof Exercise11>;

export const AccessibilityChecklist: Story = {
  render: () => <Exercise11 />,
};

export const MinimalChecklist: Story = {
  name: "Minimal Checklist Example",
  render: () => {
    const [checked, setChecked] = React.useState<Record<string, boolean>>({});

    const items = [
      { id: "alt-text", text: "All images have alt text" },
      { id: "keyboard", text: "All functionality works with keyboard" },
      { id: "contrast", text: "Text meets contrast requirements" },
      { id: "labels", text: "Form inputs have proper labels" },
    ];

    const toggle = (id: string) => {
      setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const completedCount = Object.values(checked).filter(Boolean).length;

    return (
      <main style={{ padding: "20px" }}>
        <h2>Accessibility Checklist</h2>

        <div
          style={{
            marginBottom: "20px",
            padding: "16px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          Progress: {completedCount}/{items.length} items completed
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            style={{
              marginBottom: "12px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              id={item.id}
              checked={checked[item.id] || false}
              onChange={() => toggle(item.id)}
              style={{ marginRight: "12px" }}
            />
            <label
              htmlFor={item.id}
              style={{
                textDecoration: checked[item.id] ? "line-through" : "none",
              }}
            >
              {item.text}
            </label>
          </div>
        ))}

        {completedCount === items.length && (
          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              backgroundColor: "#d4edda",
              color: "#155724",
              borderRadius: "8px",
              fontWeight: "bold",
            }}
          >
            🎉 All accessibility requirements completed!
          </div>
        )}
      </main>
    );
  },
};
