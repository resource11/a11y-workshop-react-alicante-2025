import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Exercise06 from "../exercises/Exercise06";

const meta: Meta = {
  title: "Exercises/06 — Tabs & Accordions",
  component: Exercise06,
};
export default meta;
type Story = StoryObj<typeof Exercise06>;

export const Broken: Story = {
  render: () => <Exercise06 />,
};

export const BrokenTabsExample: Story = {
  name: "Broken Tabs Example",
  render: () => {
    const [selectedTab, setSelectedTab] = React.useState("overview");

    return (
      <main>
        <h2>Broken Tabs (No ARIA Support)</h2>
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", borderBottom: "1px solid #ddd" }}>
            <div
              onClick={() => setSelectedTab("overview")}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                backgroundColor:
                  selectedTab === "overview" ? "#007bff" : "#f8f9fa",
                color: selectedTab === "overview" ? "white" : "#495057",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              Overview
            </div>
            <div
              onClick={() => setSelectedTab("details")}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                backgroundColor:
                  selectedTab === "details" ? "#007bff" : "#f8f9fa",
                color: selectedTab === "details" ? "white" : "#495057",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              Details
            </div>
          </div>

          <div
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderTop: "none",
              backgroundColor: "white",
            }}
          >
            {selectedTab === "overview" && (
              <p>
                Marine ecosystems overview content without proper ARIA labeling.
              </p>
            )}
            {selectedTab === "details" && (
              <p>
                Detailed marine ecosystem information without accessibility
                support.
              </p>
            )}
          </div>
        </div>
      </main>
    );
  },
};

export const FixedTabsExample: Story = {
  name: "Fixed Tabs Example",
  render: () => {
    const [selectedTab, setSelectedTab] = React.useState("overview");

    return (
      <main>
        <h2>Fixed Tabs (With ARIA Support)</h2>
        <div style={{ marginBottom: "20px" }}>
          <div
            role="tablist"
            style={{ display: "flex", borderBottom: "1px solid #ddd" }}
          >
            <button
              role="tab"
              aria-selected={selectedTab === "overview"}
              aria-controls="overview-panel"
              id="overview-tab"
              onClick={() => setSelectedTab("overview")}
              style={{
                padding: "12px 16px",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  selectedTab === "overview" ? "#28a745" : "#f8f9fa",
                color: selectedTab === "overview" ? "white" : "#495057",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              Overview
            </button>
            <button
              role="tab"
              aria-selected={selectedTab === "details"}
              aria-controls="details-panel"
              id="details-tab"
              onClick={() => setSelectedTab("details")}
              style={{
                padding: "12px 16px",
                border: "none",
                cursor: "pointer",
                backgroundColor:
                  selectedTab === "details" ? "#28a745" : "#f8f9fa",
                color: selectedTab === "details" ? "white" : "#495057",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
              }}
            >
              Details
            </button>
          </div>

          <div
            role="tabpanel"
            id="overview-panel"
            aria-labelledby="overview-tab"
            hidden={selectedTab !== "overview"}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderTop: "none",
              backgroundColor: "white",
            }}
          >
            {selectedTab === "overview" && (
              <p>
                Marine ecosystems overview with proper ARIA labeling and
                keyboard support.
              </p>
            )}
          </div>

          <div
            role="tabpanel"
            id="details-panel"
            aria-labelledby="details-tab"
            hidden={selectedTab !== "details"}
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderTop: "none",
              backgroundColor: "white",
            }}
          >
            {selectedTab === "details" && (
              <p>
                Detailed marine ecosystem information with full accessibility
                support.
              </p>
            )}
          </div>
        </div>
      </main>
    );
  },
};
