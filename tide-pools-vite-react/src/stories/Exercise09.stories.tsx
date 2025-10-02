import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Exercise09 from "../exercises/Exercise09";

const meta: Meta = {
  title: "Exercises/09 — Reduced Motion",
  component: Exercise09,
};
export default meta;
type Story = StoryObj<typeof Exercise09>;

export const Broken: Story = {
  render: () => <Exercise09 />,
};

export const BrokenAnimationExample: Story = {
  render: () => (
    <div>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-30px,0); }
            70% { transform: translate3d(0,-15px,0); }
            90% { transform: translate3d(0,-4px,0); }
          }
          .bounce-animation {
            animation: bounce 2s infinite;
          }
        `}
      </style>
      <main>
        <h2>Broken Animation (No Reduced Motion Support)</h2>
        <div
          className="bounce-animation"
          style={{
            padding: "20px",
            backgroundColor: "#007bff",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          This element bounces continuously without respecting motion
          preferences
        </div>
      </main>
    </div>
  ),
};

export const FixedAnimationExample: Story = {
  render: () => (
    <div>
      <style>
        {`
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-30px,0); }
            70% { transform: translate3d(0,-15px,0); }
            90% { transform: translate3d(0,-4px,0); }
          }
          .bounce-animation {
            animation: bounce 2s infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .bounce-animation {
              animation: none;
            }
          }
        `}
      </style>
      <main>
        <h2>Fixed Animation (Respects Reduced Motion)</h2>
        <div
          className="bounce-animation"
          style={{
            padding: "20px",
            backgroundColor: "#28a745",
            color: "white",
            borderRadius: "8px",
            textAlign: "center",
            margin: "20px 0",
          }}
        >
          This element respects prefers-reduced-motion settings
        </div>
        <p>Try enabling "Reduce motion" in your OS accessibility settings</p>
      </main>
    </div>
  ),
};
