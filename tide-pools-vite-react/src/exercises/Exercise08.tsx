import { useState, useEffect } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise08() {
  useDocumentTitle("Exercise 8: Theme Toggle");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [autoDetect, setAutoDetect] = useState(true);

  // Broken: No localStorage persistence or system preference detection
  useEffect(() => {
    // Should detect system preference and load saved preference
    // Currently just uses default light mode
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setAutoDetect(false);
    // Broken: Should save to localStorage
  };

  const resetToAuto = () => {
    setAutoDetect(true);
    // Broken: Should detect system preference
    setIsDarkMode(false);
  };

  // Broken theme styles - poor contrast in some combinations
  const lightTheme = {
    backgroundColor: "#ffffff",
    color: "#333333",
    headerBg: "#f8f9fa",
    cardBg: "#ffffff",
    border: "#dee2e6",
    primaryButton: "#007bff",
    primaryButtonText: "#ffffff",
    secondaryButton: "#6c757d",
    secondaryButtonText: "#ffffff",
    // Broken: Some elements have poor contrast
    mutedText: "#888888", // Too light for AA compliance
    linkColor: "#0088cc", // Should be darker
  };

  const darkTheme = {
    backgroundColor: "#121212",
    color: "#ffffff",
    headerBg: "#1e1e1e",
    cardBg: "#2d2d2d",
    border: "#404040",
    primaryButton: "#0d6efd",
    primaryButtonText: "#ffffff",
    secondaryButton: "#6c757d",
    secondaryButtonText: "#ffffff",
    // Broken: Some dark theme elements also have poor contrast
    mutedText: "#666666", // Too dark in dark mode
    linkColor: "#4dabf7", // Might not meet contrast requirements
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <div
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.color,
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s", // Broken: No reduced motion consideration
      }}
    >
      {/* Broken: Should be <header> but using div */}
      <div
        className="page-header"
        style={{
          backgroundColor: currentTheme.headerBg,
          padding: "20px",
          borderBottom: `1px solid ${currentTheme.border}`,
        }}
      >
        <div className="big" style={{ marginBottom: "16px" }}>
          Exercise 8: Theme Toggle (Dark/Light)
        </div>
        <p className="exercise-intro">
          Theme toggles must respect user preferences, maintain proper contrast
          ratios, and clearly communicate their current state to all users.
        </p>

        {/* Broken: Non-semantic theme toggle */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Theme Controls:</span>

          <span
            onClick={toggleTheme}
            style={{
              padding: "8px 16px",
              backgroundColor: currentTheme.primaryButton,
              color: currentTheme.primaryButtonText,
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
            }}
          >
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </span>

          <span
            onClick={resetToAuto}
            style={{
              padding: "8px 16px",
              backgroundColor: currentTheme.secondaryButton,
              color: currentTheme.secondaryButtonText,
              cursor: "pointer",
              borderRadius: "4px",
              border: "none",
            }}
          >
            🔄 Auto
          </span>

          <span
            style={{
              fontSize: "14px",
              color: currentTheme.mutedText, // Broken: Poor contrast
            }}
          >
            {autoDetect ? "(Following system)" : "(Manual override)"}
          </span>
        </div>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise" style={{ padding: "20px" }}>
        <div className="broken-implementation">
          <div
            className="big"
            style={{
              marginBottom: "24px",
              padding: "20px",
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`,
              borderRadius: "8px",
            }}
          >
            🚨 Broken Theme Toggle Implementation
          </div>

          {/* Demo content to show theme differences */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              marginBottom: "32px",
            }}
          >
            {/* Card 1: Navigation example */}
            <div
              style={{
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`,
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                Navigation Menu
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <span
                  style={{
                    color: currentTheme.linkColor, // Broken: May not meet contrast
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Marine Research
                </span>
                <span
                  style={{
                    color: currentTheme.linkColor,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Conservation Efforts
                </span>
                <span
                  style={{
                    color: currentTheme.linkColor,
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Get Involved
                </span>
                <span
                  style={{
                    color: currentTheme.mutedText, // Broken: Poor contrast
                    fontSize: "14px",
                  }}
                >
                  Learn about ocean protection
                </span>
              </div>
            </div>

            {/* Card 2: Form example */}
            <div
              style={{
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`,
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                Newsletter Signup
              </div>
              <form>
                <div style={{ marginBottom: "12px" }}>
                  <div style={{ marginBottom: "4px", fontWeight: "500" }}>
                    Email Address
                  </div>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    style={{
                      width: "100%",
                      padding: "8px",
                      borderRadius: "4px",
                      border: `1px solid ${currentTheme.border}`,
                      backgroundColor: currentTheme.backgroundColor,
                      color: currentTheme.color,
                    }}
                  />
                </div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: currentTheme.primaryButton,
                    color: currentTheme.primaryButtonText,
                    cursor: "pointer",
                    borderRadius: "4px",
                    border: "none",
                  }}
                >
                  Subscribe
                </span>
              </form>
            </div>

            {/* Card 3: Status indicators */}
            <div
              style={{
                backgroundColor: currentTheme.cardBg,
                border: `1px solid ${currentTheme.border}`,
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                Ocean Health Status
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Water Temperature</span>
                  <span
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#28a745",
                      color: "white",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    Normal
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>pH Levels</span>
                  <span
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#ffc107",
                      color: "#000", // Broken: Might not meet contrast in dark mode
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    Warning
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>Coral Bleaching</span>
                  <span
                    style={{
                      padding: "4px 8px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    Critical
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: currentTheme.mutedText, // Broken: Poor contrast
                    fontStyle: "italic",
                  }}
                >
                  Last updated: 2 hours ago
                </div>
              </div>
            </div>
          </div>

          {/* Theme toggle demonstration area */}
          <div
            style={{
              backgroundColor: currentTheme.cardBg,
              border: `1px solid ${currentTheme.border}`,
              borderRadius: "8px",
              padding: "24px",
              marginBottom: "32px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Theme Toggle Demonstration
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                Current Theme Status:
              </div>
              <div
                style={{
                  padding: "12px",
                  backgroundColor: currentTheme.backgroundColor,
                  border: `2px dashed ${currentTheme.border}`,
                  borderRadius: "4px",
                }}
              >
                Mode: <strong>{isDarkMode ? "Dark" : "Light"}</strong>
                <br />
                Auto-detect:{" "}
                <strong>{autoDetect ? "Enabled" : "Disabled"}</strong>
                <br />
                Background: <code>{currentTheme.backgroundColor}</code>
                <br />
                Text Color: <code>{currentTheme.color}</code>
              </div>
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: isDarkMode ? "#2a2a2a" : "#f0f0f0",
                borderRadius: "4px",
                border: `1px solid ${currentTheme.border}`,
              }}
            >
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                Accessibility Notes:
              </div>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                <li style={{ color: currentTheme.mutedText }}>
                  Toggle should respect prefers-color-scheme
                </li>
                <li style={{ color: currentTheme.mutedText }}>
                  State should be saved to localStorage
                </li>
                <li style={{ color: currentTheme.mutedText }}>
                  All text must maintain WCAG AA contrast ratios
                </li>
                <li style={{ color: currentTheme.mutedText }}>
                  Button state should be announced to screen readers
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">🚨 Theme Toggle Problems to Fix:</div>
          <ul>
            <li>
              <strong>No System Preference Detection:</strong> Doesn't check
              prefers-color-scheme
            </li>
            <li>
              <strong>Missing Persistence:</strong> Theme choice not saved to
              localStorage
            </li>
            <li>
              <strong>Poor ARIA Support:</strong> Toggle state not announced to
              screen readers
            </li>
            <li>
              <strong>Contrast Violations:</strong> Some text combinations don't
              meet WCAG AA
            </li>
            <li>
              <strong>Non-Semantic Controls:</strong> Spans instead of proper
              button elements
            </li>
            <li>
              <strong>No Reduced Motion:</strong> Animations don't respect
              prefers-reduced-motion
            </li>
            <li>
              <strong>Missing Focus Indicators:</strong> Custom buttons lack
              proper focus styles
            </li>
            <li>
              <strong>Incomplete Theme Coverage:</strong> Not all UI elements
              properly themed
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Make the theme toggle fully accessible by:</p>
          <ol>
            <li>
              Detect system preference using <code>prefers-color-scheme</code>
            </li>
            <li>Save theme preference to localStorage and restore on load</li>
            <li>Convert toggle spans to proper button elements</li>
            <li>
              Add <code>aria-pressed</code> to indicate current toggle state
            </li>
            <li>
              Ensure all text meets WCAG AA contrast ratios (4.5:1 for normal
              text)
            </li>
            <li>Add proper focus indicators for theme toggle buttons</li>
            <li>
              Respect <code>prefers-reduced-motion</code> for theme transitions
            </li>
            <li>Test both themes thoroughly with screen readers</li>
            <li>Add descriptive labels for screen reader users</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>System Preference:</strong> Change OS theme - should
              auto-detect when in auto mode
            </li>
            <li>
              <strong>Persistence:</strong> Toggle theme and refresh page -
              should remember choice
            </li>
            <li>
              <strong>Screen Reader:</strong> Use VoiceOver or NVDA - should
              announce button state
            </li>
            <li>
              <strong>Contrast Testing:</strong> Use browser DevTools to verify
              all text meets WCAG AA
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Tab to theme buttons -
              should have visible focus
            </li>
            <li>
              <strong>Reduced Motion:</strong> Set OS to reduce motion -
              transitions should be minimal
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 5 (Perceivable):</strong> Sufficient contrast in
              all themes
            </li>
            <li>
              <strong>Article 8 (Adaptable):</strong> Respect user preferences
              and settings
            </li>
            <li>
              <strong>WCAG 1.4.3:</strong> Contrast (Minimum) - 4.5:1 for normal
              text
            </li>
            <li>
              <strong>WCAG 1.4.6:</strong> Contrast (Enhanced) - 7:1 for better
              accessibility
            </li>
            <li>
              <strong>WCAG 2.4.7:</strong> Focus Visible - clear focus
              indicators
            </li>
            <li>
              <strong>WCAG 3.2.1:</strong> On Focus - no unexpected context
              changes
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - proper button
              states
            </li>
          </ul>
        </div>
      </div>

      {/* Footer with theme-appropriate styling */}
      <div
        className="page-footer"
        style={{
          backgroundColor: currentTheme.headerBg,
          borderTop: `1px solid ${currentTheme.border}`,
          padding: "20px",
        }}
      >
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
          <div className="copyright" style={{ color: currentTheme.mutedText }}>
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
