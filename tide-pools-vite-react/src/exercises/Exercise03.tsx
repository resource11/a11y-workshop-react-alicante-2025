import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise03() {
  useDocumentTitle("Exercise 3: Contrast & Focus");
  const [formData, setFormData] = useState({ email: "", message: "" });

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 3: Contrast & Focus</div>
        <p className="exercise-intro">
          Visual accessibility ensures all users can perceive and interact with
          content, regardless of vision abilities or input method.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">🚨 Broken Contrast & Focus</div>

          <style>{`
            .poor-contrast { 
              color: #999; 
              background: #ccc; 
              padding: 12px; 
              margin-bottom: 20px; 
              border-radius: 4px;
            }
            .poor-link { 
              color: #aaa; 
              text-decoration: none; 
              cursor: pointer; 
              padding: 4px;
            }
            .no-focus input { 
              outline: none !important; 
              border: 1px solid #ddd; 
              padding: 8px 12px; 
              margin: 8px 0;
              border-radius: 4px;
            }
            .no-focus button { 
              outline: none !important; 
              background: #eee; 
              border: none; 
              padding: 10px 16px; 
              color: #999; 
              cursor: pointer;
              border-radius: 4px;
            }
            .invisible-focus:focus {
              outline: none !important;
              box-shadow: none !important;
            }
          `}</style>

          {/* Poor contrast examples */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "12px" }}>
              Poor Color Contrast Examples:
            </div>

            <div className="poor-contrast">
              🚨 Important Notice: This text is hard to read due to poor
              contrast (2.1:1 ratio)
            </div>

            <div
              style={{
                color: "#777",
                backgroundColor: "#bbb",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "4px",
              }}
            >
              This gray text on gray background fails WCAG standards (1.8:1
              ratio)
            </div>

            <p style={{ color: "#aaa" }}>
              Visit our{" "}
              <span className="poor-link" onClick={() => alert("Clicked")}>
                help section
              </span>{" "}
              for more information. (Poor link contrast: 1.5:1)
            </p>
          </div>

          {/* Focus visibility problems */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "12px" }}>
              Invisible Focus Indicators:
            </div>

            <form className="no-focus" onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: "12px" }}>
                <label
                  htmlFor="broken-email"
                  style={{ display: "block", marginBottom: "4px" }}
                >
                  Email Address:
                </label>
                <input
                  id="broken-email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  style={{ width: "100%" }}
                />
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  htmlFor="broken-message"
                  style={{ display: "block", marginBottom: "4px" }}
                >
                  Message:
                </label>
                <textarea
                  id="broken-message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  rows={3}
                  style={{
                    width: "100%",
                    outline: "none",
                    border: "1px solid #ddd",
                    padding: "8px 12px",
                    borderRadius: "4px",
                  }}
                />
              </div>

              <button type="submit">Subscribe (try tabbing to this)</button>
            </form>
          </div>

          {/* Interactive elements with poor visual feedback */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "12px" }}>
              Poor Interactive Feedback:
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button
                className="invisible-focus"
                onClick={() => alert("Button clicked")}
                style={{
                  backgroundColor: "#f8f8f8",
                  color: "#aaa",
                  border: "1px solid #ddd",
                  padding: "8px 16px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Low Contrast Button
              </button>

              <a
                href="#example"
                className="invisible-focus"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Link clicked");
                }}
                style={{
                  color: "#ccc",
                  textDecoration: "none",
                  padding: "8px 12px",
                  border: "1px solid #eee",
                  display: "inline-block",
                  borderRadius: "4px",
                }}
              >
                Barely Visible Link
              </a>
            </div>
          </div>

          {/* Content that depends only on color */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "12px" }}>
              Information Conveyed Only by Color:
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
              }}
            >
              <p>Form Validation Status:</p>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ color: "red", marginBottom: "4px" }}>
                  Email field (missing error context)
                </li>
                <li style={{ color: "green", marginBottom: "4px" }}>
                  Password field (missing success context)
                </li>
                <li style={{ color: "orange" }}>
                  Confirm password (missing warning context)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">
            🚨 Contrast & Focus Problems to Fix:
          </div>
          <ul>
            <li>
              <strong>Poor Color Contrast:</strong> Text fails WCAG AA standards
              (4.5:1 for normal, 3:1 for large text)
            </li>
            <li>
              <strong>No Focus Indicators:</strong> Outline removed with CSS,
              impossible to see keyboard focus
            </li>
            <li>
              <strong>Low Contrast Interactive Elements:</strong> Buttons and
              links barely visible
            </li>
            <li>
              <strong>Color-Only Information:</strong> Status conveyed only
              through color, not accessible to colorblind users
            </li>
            <li>
              <strong>Invisible Interactions:</strong> No visual feedback for
              hover or focus states
            </li>
            <li>
              <strong>Poor Link Contrast:</strong> Links don't meet contrast
              requirements
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Fix the visual accessibility issues by:</p>
          <ol>
            <li>
              Ensure text meets WCAG AA contrast ratios (4.5:1 for normal text,
              3:1 for large)
            </li>
            <li>Add visible focus indicators for all interactive elements</li>
            <li>Use proper semantic links instead of click handlers</li>
            <li>
              Add non-color indicators for status information (icons, text,
              patterns)
            </li>
            <li>
              Implement proper hover and focus states for better usability
            </li>
            <li>Test with keyboard navigation and color vision simulators</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Contrast Tools:</strong> Use WebAIM contrast checker or
              browser DevTools
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Tab through elements - focus
              must be clearly visible
            </li>
            <li>
              <strong>Color Vision:</strong> Test with color blindness
              simulators
            </li>
            <li>
              <strong>High Contrast Mode:</strong> Check Windows High Contrast
              mode compatibility
            </li>
            <li>
              <strong>Focus Visibility:</strong> Ensure 3:1 contrast ratio for
              focus indicators
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 5 (Perceivable):</strong> Sufficient contrast and
              visual indicators
            </li>
            <li>
              <strong>Article 6 (Operable):</strong> Visible focus for keyboard
              navigation
            </li>
            <li>
              <strong>WCAG 1.4.3:</strong> Contrast (Minimum) - 4.5:1 normal
              text, 3:1 large text
            </li>
            <li>
              <strong>WCAG 1.4.11:</strong> Non-text Contrast - 3:1 for UI
              components
            </li>
            <li>
              <strong>WCAG 2.4.7:</strong> Focus Visible - clear focus
              indicators required
            </li>
            <li>
              <strong>WCAG 1.4.1:</strong> Use of Color - don't rely on color
              alone
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
