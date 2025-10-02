import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise10() {
  useDocumentTitle("Exercise 10: Testing & Automation");
  const [testResults, setTestResults] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runAccessibilityTests = async () => {
    setIsRunning(true);
    setTestResults([]);

    // Simulate running accessibility tests
    const mockResults = [
      {
        id: 1,
        type: "error",
        rule: "color-contrast",
        description: "Element has insufficient color contrast ratio",
        element: "button.secondary",
        expected: "4.5:1",
        actual: "2.1:1",
        help: "Ensure all text has sufficient color contrast against the background",
      },
      {
        id: 2,
        type: "error",
        rule: "label",
        description: "Form element does not have an accessible name",
        element: "input[type='email']",
        expected: "Associated label or aria-label",
        actual: "No accessible name found",
        help: "Add a label element or aria-label attribute",
      },
      {
        id: 3,
        type: "warning",
        rule: "focus-order-semantics",
        description: "Element is focusable but not operable",
        element: "span[onclick]",
        expected: "Use button or add keyboard support",
        actual: "Clickable span without keyboard support",
        help: "Use semantic button elements for interactive content",
      },
      {
        id: 4,
        type: "error",
        rule: "aria-valid-attr-value",
        description: "ARIA attribute has invalid value",
        element: "div[aria-expanded='yes']",
        expected: "true or false",
        actual: "yes",
        help: "ARIA boolean attributes must use 'true' or 'false'",
      },
      {
        id: 5,
        type: "warning",
        rule: "landmark-one-main",
        description: "Page should have one main landmark",
        element: "document",
        expected: "Exactly one main element",
        actual: "No main element found",
        help: "Add a main element to identify the primary content",
      },
    ];

    // Simulate async test execution
    for (let i = 0; i < mockResults.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTestResults((prev) => [...prev, mockResults[i]]);
    }

    setIsRunning(false);
  };

  const clearResults = () => {
    setTestResults([]);
  };

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 10: Testing & Automation</div>
        <p className="exercise-intro">
          Automated accessibility testing helps catch common issues, but manual
          testing and understanding test results are crucial for comprehensive
          accessibility.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">🚨 Broken Accessibility Testing Examples</div>

          {/* Test Runner Interface */}
          <div
            style={{
              marginBottom: "32px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Accessibility Test Runner
            </div>

            <div style={{ marginBottom: "16px" }}>
              <span
                onClick={runAccessibilityTests}
                style={{
                  padding: "12px 24px",
                  backgroundColor: isRunning ? "#6c757d" : "#007bff",
                  color: "white",
                  cursor: isRunning ? "not-allowed" : "pointer",
                  borderRadius: "4px",
                  marginRight: "8px",
                }}
              >
                {isRunning ? "⏳ Running Tests..." : "🧪 Run axe-core Tests"}
              </span>

              <span
                onClick={clearResults}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                🗑️ Clear Results
              </span>
            </div>

            {isRunning && (
              <div
                style={{
                  padding: "12px",
                  backgroundColor: "#e3f2fd",
                  border: "1px solid #2196f3",
                  borderRadius: "4px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      border: "2px solid #f3f3f3",
                      borderTop: "2px solid #2196f3",
                      borderRadius: "50%",
                      animation: "spin 1s linear infinite",
                    }}
                  ></div>
                  <span>Scanning for accessibility issues...</span>
                </div>
              </div>
            )}

            {testResults.length > 0 && (
              <div>
                <div
                  style={{
                    marginBottom: "16px",
                    padding: "12px",
                    backgroundColor:
                      testResults.filter((r) => r.type === "error").length > 0
                        ? "#f8d7da"
                        : "#d4edda",
                    border: `1px solid ${testResults.filter((r) => r.type === "error").length > 0 ? "#f5c6cb" : "#c3e6cb"}`,
                    borderRadius: "4px",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>
                    Test Summary: {testResults.length} issues found
                  </div>
                  <div>
                    Errors:{" "}
                    {testResults.filter((r) => r.type === "error").length} |
                    Warnings:{" "}
                    {testResults.filter((r) => r.type === "warning").length}
                  </div>
                </div>

                {testResults.map((result) => (
                  <div
                    key={result.id}
                    style={{
                      marginBottom: "16px",
                      padding: "16px",
                      border: `1px solid ${result.type === "error" ? "#dc3545" : "#ffc107"}`,
                      borderLeft: `4px solid ${result.type === "error" ? "#dc3545" : "#ffc107"}`,
                      borderRadius: "4px",
                      backgroundColor:
                        result.type === "error" ? "#fff5f5" : "#fffbf0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "8px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color:
                            result.type === "error" ? "#dc3545" : "#856404",
                        }}
                      >
                        {result.type === "error" ? "❌" : "⚠️"} {result.rule}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          padding: "2px 8px",
                          backgroundColor:
                            result.type === "error" ? "#dc3545" : "#ffc107",
                          color: result.type === "error" ? "white" : "#000",
                          borderRadius: "12px",
                        }}
                      >
                        {result.type.toUpperCase()}
                      </div>
                    </div>

                    <div style={{ marginBottom: "8px", fontWeight: "500" }}>
                      {result.description}
                    </div>

                    <div
                      style={{
                        fontSize: "14px",
                        fontFamily: "monospace",
                        backgroundColor: "#f8f9fa",
                        padding: "8px",
                        borderRadius: "4px",
                        marginBottom: "8px",
                      }}
                    >
                      Element: {result.element}
                    </div>

                    <div style={{ fontSize: "14px", marginBottom: "4px" }}>
                      <strong>Expected:</strong> {result.expected}
                    </div>

                    <div style={{ fontSize: "14px", marginBottom: "8px" }}>
                      <strong>Actual:</strong> {result.actual}
                    </div>

                    <div
                      style={{
                        fontSize: "14px",
                        fontStyle: "italic",
                        color: "#666",
                      }}
                    >
                      💡 {result.help}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Examples of testable broken patterns */}
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Broken Elements for Testing (These should fail axe-core):
            </div>

            {/* Missing label */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                1. Input without label (should fail "label" rule):
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </div>

            {/* Poor contrast */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                2. Poor contrast text (should fail "color-contrast" rule):
              </div>
              <div
                style={{
                  color: "#ccc",
                  backgroundColor: "#fff",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
              >
                This text has insufficient contrast ratio (1.8:1)
              </div>
            </div>

            {/* Non-semantic interactive element */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                3. Non-semantic button (should fail multiple rules):
              </div>
              <span
                onClick={() => alert("Clicked!")}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Fake Button (span)
              </span>
            </div>

            {/* Invalid ARIA */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                4. Invalid ARIA attribute (should fail "aria-valid-attr-value"):
              </div>
              <div
                {...({ "aria-expanded": "yes" } as any)}
                style={{
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                Collapsible section with invalid aria-expanded="yes"
              </div>
            </div>

            {/* Missing heading structure */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                5. Broken heading structure (should fail heading hierarchy
                rules):
              </div>
              <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                Fake H1 (should be proper heading)
              </div>
              <div style={{ fontSize: "14px", fontWeight: "bold" }}>
                Fake H4 (skips levels)
              </div>
            </div>

            {/* Image without alt */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                6. Image without alt text (should fail "image-alt" rule):
              </div>
              <div
                style={{
                  width: "100px",
                  height: "60px",
                  backgroundColor: "#ddd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                }}
              >
                🖼️ Image
              </div>
            </div>

            {/* Form without fieldset */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                7. Radio buttons without fieldset (should fail form rules):
              </div>
              <div>
                <div style={{ marginBottom: "8px" }}>
                  Preferred contact method:
                </div>
                <label style={{ display: "block", marginBottom: "4px" }}>
                  <input
                    type="radio"
                    name="contact"
                    value="email"
                    style={{ marginRight: "8px" }}
                  />
                  Email
                </label>
                <label style={{ display: "block" }}>
                  <input
                    type="radio"
                    name="contact"
                    value="phone"
                    style={{ marginRight: "8px" }}
                  />
                  Phone
                </label>
              </div>
            </div>
          </div>

          {/* Testing methodology section */}
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "8px",
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
              📋 Testing Methodology Checklist
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                Automated Testing (axe-core):
              </div>
              <ul style={{ marginLeft: "20px" }}>
                <li>Run axe-core on every page/component</li>
                <li>Fix all reported violations</li>
                <li>Integrate into CI/CD pipeline</li>
                <li>Test multiple viewport sizes</li>
              </ul>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                Manual Testing:
              </div>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Navigate with keyboard only (Tab, Arrow keys, Enter, Space)
                </li>
                <li>Test with screen reader (VoiceOver, NVDA, JAWS)</li>
                <li>Verify color contrast meets WCAG guidelines</li>
                <li>Check zoom functionality up to 400%</li>
                <li>Test with reduced motion settings</li>
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: "500", marginBottom: "8px" }}>
                User Testing:
              </div>
              <ul style={{ marginLeft: "20px" }}>
                <li>Include users with disabilities in testing</li>
                <li>Test with real assistive technologies</li>
                <li>Gather feedback on usability and experience</li>
                <li>Iterate based on user feedback</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">
            🚨 Testing & Automation Problems to Fix:
          </div>
          <ul>
            <li>
              <strong>No Automated Tests:</strong> Missing axe-core integration
              in test suite
            </li>
            <li>
              <strong>Incomplete Coverage:</strong> Not testing all components
              and pages
            </li>
            <li>
              <strong>Manual Test Gaps:</strong> No keyboard-only or screen
              reader testing
            </li>
            <li>
              <strong>Poor CI Integration:</strong> Accessibility tests not
              blocking deployments
            </li>
            <li>
              <strong>No Test Documentation:</strong> Missing testing procedures
              and checklists
            </li>
            <li>
              <strong>Ignored Warnings:</strong> Only focusing on errors,
              ignoring warnings
            </li>
            <li>
              <strong>No Regression Testing:</strong> Not preventing
              accessibility issues from reoccurring
            </li>
            <li>
              <strong>Limited Tool Usage:</strong> Only using one testing method
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Implement comprehensive accessibility testing by:</p>
          <ol>
            <li>Add axe-core automated tests to your test suite</li>
            <li>
              Create Jest/Testing Library tests for form labels, roles, and
              accessible names
            </li>
            <li>
              Set up Storybook test-runner with axe-playwright integration
            </li>
            <li>Add accessibility checks to CI/CD pipeline that fail builds</li>
            <li>Document keyboard testing procedures</li>
            <li>Create screen reader testing checklist</li>
            <li>Add contrast ratio verification tools</li>
            <li>Implement regression testing for accessibility fixes</li>
            <li>Set up automated Lighthouse accessibility audits</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Run axe Tests:</strong> Use the mock test runner above to
              see axe-core results
            </li>
            <li>
              <strong>Manual Verification:</strong> Use browser DevTools
              accessibility panel
            </li>
            <li>
              <strong>Keyboard Testing:</strong> Navigate using only Tab, Arrow
              keys, Enter, Space
            </li>
            <li>
              <strong>Screen Reader:</strong> Test with VoiceOver (macOS) or
              NVDA (Windows)
            </li>
            <li>
              <strong>Contrast Checking:</strong> Use WebAIM Contrast Checker or
              DevTools
            </li>
            <li>
              <strong>Real User Testing:</strong> Include users with
              disabilities in testing process
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 12 (Robust):</strong> Content can be interpreted
              by assistive technologies
            </li>
            <li>
              <strong>WCAG 4.1.1:</strong> Parsing - valid code that assistive
              technology can process
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - all components
              have accessible names
            </li>
            <li>
              <strong>WCAG 4.1.3:</strong> Status Messages - important changes
              are announced
            </li>
            <li>
              <strong>Testing Requirement:</strong> Regular accessibility audits
              and user testing
            </li>
          </ul>
        </div>
      </div>

      {/* Add CSS for spinner animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

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
