import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise06() {
  useDocumentTitle("Exercise 6: Tabs & Accordions");
  const [activeTab, setActiveTab] = useState(0);
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(
    null,
  );

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 6: Tabs & Accordions</div>
        <p className="exercise-intro">
          Complex interactive widgets like tabs and accordions require proper
          ARIA implementation and keyboard support to work with assistive
          technologies.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">🚨 Broken Tabs & Accordions</div>

          {/* Broken tabs - not keyboard accessible */}
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: "16px",
                fontSize: "18px",
              }}
            >
              🚨 Broken Tab Navigation:
            </div>
            {["Marine Life", "Conservation", "Research"].map((tab, index) => (
              <div
                key={index}
                className={`tab-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
                style={{
                  padding: "12px 20px",
                  border: "1px solid #ccc",
                  cursor: "pointer",
                  backgroundColor: activeTab === index ? "#e9ecef" : "white",
                  display: "inline-block",
                  marginRight: "4px",
                  borderRadius: "4px 4px 0 0",
                }}
              >
                {tab}
              </div>
            ))}

            <div
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                marginTop: "-1px",
                backgroundColor: "#f8f9fa",
                borderRadius: "0 0 4px 4px",
              }}
            >
              {activeTab === 0 && (
                <div>
                  <h3>Marine Life Content</h3>
                  <p>
                    Information about various species found in tide pools and
                    coastal waters...
                  </p>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <h3>Conservation Efforts</h3>
                  <p>
                    Learn about ongoing efforts to protect marine ecosystems...
                  </p>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <h3>Research Programs</h3>
                  <p>Current research initiatives studying ocean health...</p>
                </div>
              )}
            </div>
          </div>

          {/* Broken accordions - no ARIA, poor keyboard support */}
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: "16px",
                fontSize: "18px",
              }}
            >
              🚨 Broken Accordion:
            </div>

            {[
              {
                title: "What is Ocean Acidification?",
                content:
                  "Ocean acidification occurs when CO2 dissolves in seawater, lowering the ocean's pH and making it more acidic.",
              },
              {
                title: "How Does Climate Change Affect Marine Life?",
                content:
                  "Rising temperatures, changing currents, and acidification all impact marine ecosystems and species distribution.",
              },
              {
                title: "What Can Individuals Do to Help?",
                content:
                  "Reduce carbon footprint, support sustainable fishing, participate in beach cleanups, and advocate for marine protection.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #dee2e6",
                  marginBottom: "8px",
                  borderRadius: "4px",
                }}
              >
                <div
                  onClick={() =>
                    setExpandedAccordion(
                      expandedAccordion === index ? null : index,
                    )
                  }
                  style={{
                    padding: "12px 16px",
                    cursor: "pointer",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{item.title}</span>
                  <span style={{ fontSize: "14px" }}>
                    {expandedAccordion === index ? "−" : "+"}
                  </span>
                </div>

                {expandedAccordion === index && (
                  <div
                    style={{
                      padding: "16px",
                      borderTop: "1px solid #dee2e6",
                      backgroundColor: "white",
                    }}
                  >
                    <p style={{ margin: 0 }}>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">
            🚨 Tabs & Accordion Problems to Fix:
          </div>
          <ul>
            <li>
              <strong>Non-Semantic Tabs:</strong> Divs with click handlers
              instead of proper buttons
            </li>
            <li>
              <strong>Missing ARIA Roles:</strong> No tablist, tab, or tabpanel
              roles for screen readers
            </li>
            <li>
              <strong>No Arrow Key Navigation:</strong> Tabs should use
              left/right arrows, not tab key
            </li>
            <li>
              <strong>Missing Tab States:</strong> No aria-selected or
              aria-controls attributes
            </li>
            <li>
              <strong>Accordion Issues:</strong> Divs instead of buttons, no
              aria-expanded state
            </li>
            <li>
              <strong>No Keyboard Support:</strong> Accordions can't be operated
              with keyboard
            </li>
            <li>
              <strong>Missing Relationships:</strong> No connection between
              triggers and content panels
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Fix the tabs and accordions by:</p>
          <ol>
            <li>Convert tab divs to proper buttons with role="tab"</li>
            <li>Add tablist container with role="tablist"</li>
            <li>Implement arrow key navigation for tabs (left/right arrows)</li>
            <li>
              Add aria-selected, aria-controls, and proper tabindex management
            </li>
            <li>Convert accordion headers to proper button elements</li>
            <li>Add aria-expanded state management for accordions</li>
            <li>Connect accordion buttons to content with aria-controls</li>
            <li>Ensure all widgets work with keyboard only</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Keyboard Only:</strong> Navigate with Tab, Shift+Tab,
              Arrow keys, Enter, Space
            </li>
            <li>
              <strong>Tab Navigation:</strong> Tab should move to tab list,
              arrows navigate between tabs
            </li>
            <li>
              <strong>Screen Reader:</strong> Should announce "tablist", "tab",
              selected state
            </li>
            <li>
              <strong>Accordion Testing:</strong> Enter/Space should toggle,
              state should be announced
            </li>
            <li>
              <strong>ARIA Validation:</strong> Check that all relationships are
              properly connected
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 6 (Operable):</strong> All functionality available
              via keyboard
            </li>
            <li>
              <strong>WCAG 2.1.1:</strong> Keyboard accessible - no mouse
              required
            </li>
            <li>
              <strong>WCAG 2.4.3:</strong> Logical focus order within widgets
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, role, value for custom
              components
            </li>
            <li>
              <strong>ARIA Authoring Practices:</strong> Proper tab and
              accordion patterns
            </li>
          </ul>
        </div>
      </div>

      {/* Broken footer structure */}
      <div className="page-footer">
        <div className="footer-content">
          <div>
            <div>
              <span onClick={() => alert("Navigation would work here")}>
                About This Workshop
              </span>
            </div>
            <div>
              <span onClick={() => alert("Navigation would work here")}>
                Accessibility Resources
              </span>
            </div>
            <div>
              <span onClick={() => alert("Navigation would work here")}>
                Contact
              </span>
            </div>
          </div>
          <div className="copyright">
            © 2024 Accessibility Workshop.
            <span onClick={() => alert("Link would work here")}>
              Content licensed under Creative Commons
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
