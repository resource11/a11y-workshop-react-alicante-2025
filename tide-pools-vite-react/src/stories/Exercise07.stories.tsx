import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Exercise07 from "../exercises/Exercise07";

const meta: Meta = {
  title: "Exercises/07 — Forms & Errors",
  component: Exercise07,
};
export default meta;
type Story = StoryObj<typeof Exercise07>;

export const Broken: Story = {
  render: () => <Exercise07 />,
};

export const BrokenFormExample: Story = {
  render: () => (
    <main>
      <h2>Broken Form Example</h2>
      <form>
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontWeight: "bold" }}>Email Address *</div>
          <input type="email" placeholder="Enter email" />
          <div style={{ color: "#dc3545", fontSize: "14px" }}>
            This field is required
          </div>
        </div>
        <span
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </span>
      </form>
    </main>
  ),
};

export const FixedFormExample: Story = {
  render: () => (
    <main>
      <h2>Fixed Form Example</h2>
      <form>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="email-input" style={{ fontWeight: "bold" }}>
            Email Address *
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Enter email"
            aria-required="true"
            aria-invalid="true"
            aria-describedby="email-error"
            style={{ marginTop: "4px" }}
          />
          <div id="email-error" style={{ color: "#dc3545", fontSize: "14px" }}>
            This field is required
          </div>
        </div>
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
          }}
        >
          Submit
        </button>
      </form>
    </main>
  ),
};
