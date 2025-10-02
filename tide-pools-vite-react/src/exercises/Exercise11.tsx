import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise11() {
  useDocumentTitle("Exercise 11: Comprehensive Accessibility Review");
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleCheck = (itemId: string) => {
    setCheckedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const accessibilityChecklist = [
    {
      category: "Perceivable (WCAG Principle 1)",
      items: [
        {
          id: "alt-text",
          text: "All images have appropriate alternative text",
        },
        {
          id: "captions",
          text: "Video content includes captions or transcripts",
        },
        {
          id: "color-contrast",
          text: "Text meets minimum contrast ratios (4.5:1 for normal, 3:1 for large)",
        },
        {
          id: "color-meaning",
          text: "Information isn't conveyed by color alone",
        },
        {
          id: "text-resize",
          text: "Text can be resized up to 200% without loss of functionality",
        },
        {
          id: "images-text",
          text: "Images of text are avoided or have text alternatives",
        },
      ],
    },
    {
      category: "Operable (WCAG Principle 2)",
      items: [
        {
          id: "keyboard-access",
          text: "All functionality is keyboard accessible",
        },
        {
          id: "no-keyboard-trap",
          text: "Keyboard focus isn't trapped in any component",
        },
        {
          id: "timing-control",
          text: "Users can control or extend time limits",
        },
        {
          id: "seizure-safe",
          text: "Content doesn't cause seizures or vestibular disorders",
        },
        { id: "focus-visible", text: "Keyboard focus is clearly visible" },
        { id: "target-size", text: "Touch targets are at least 44x44 pixels" },
      ],
    },
    {
      category: "Understandable (WCAG Principle 3)",
      items: [
        { id: "page-language", text: "Page language is specified" },
        {
          id: "form-labels",
          text: "Form inputs have clear labels and instructions",
        },
        { id: "error-messages", text: "Error messages are clear and helpful" },
        {
          id: "consistent-navigation",
          text: "Navigation is consistent across pages",
        },
        {
          id: "predictable-function",
          text: "Interactive elements behave predictably",
        },
        { id: "help-available", text: "Help is available for complex forms" },
      ],
    },
    {
      category: "Robust (WCAG Principle 4)",
      items: [
        { id: "valid-code", text: "Markup validates and follows standards" },
        {
          id: "assistive-tech",
          text: "Content works with assistive technologies",
        },
        {
          id: "semantic-markup",
          text: "Semantic HTML elements are used correctly",
        },
        {
          id: "aria-labels",
          text: "ARIA labels and roles are used appropriately",
        },
        {
          id: "status-messages",
          text: "Important status changes are announced",
        },
      ],
    },
    {
      category: "Testing & QA",
      items: [
        {
          id: "automated-tests",
          text: "Automated accessibility tests are passing",
        },
        { id: "manual-keyboard", text: "Manual keyboard testing completed" },
        { id: "screen-reader", text: "Screen reader testing completed" },
        { id: "real-users", text: "Testing with users who have disabilities" },
        { id: "mobile-access", text: "Mobile accessibility tested" },
        { id: "documentation", text: "Accessibility features are documented" },
      ],
    },
  ];

  const totalItems = accessibilityChecklist.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const completionPercentage = Math.round((checkedCount / totalItems) * 100);

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">
          Exercise 11: Comprehensive Accessibility Review
        </div>
        <p className="exercise-intro">
          This final exercise provides a comprehensive checklist to review and
          ensure all accessibility requirements are met across your entire
          application.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">📋 Accessibility Compliance Checklist</div>

          {/* Progress indicator */}
          <div
            style={{
              marginBottom: "32px",
              padding: "20px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #dee2e6",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                Overall Progress: {checkedCount}/{totalItems} items completed
              </div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color:
                    completionPercentage === 100
                      ? "#28a745"
                      : completionPercentage >= 70
                        ? "#ffc107"
                        : "#dc3545",
                }}
              >
                {completionPercentage}%
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "20px",
                backgroundColor: "#e9ecef",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${completionPercentage}%`,
                  height: "100%",
                  backgroundColor:
                    completionPercentage === 100
                      ? "#28a745"
                      : completionPercentage >= 70
                        ? "#ffc107"
                        : "#dc3545",
                  transition: "width 0.3s ease",
                }}
              />
            </div>

            {completionPercentage === 100 && (
              <div
                style={{
                  marginTop: "12px",
                  padding: "12px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                🎉 Congratulations! Your application meets all accessibility
                requirements!
              </div>
            )}
          </div>

          {/* Checklist categories */}
          {accessibilityChecklist.map((category, categoryIndex) => {
            const categoryChecked = category.items.filter(
              (item) => checkedItems[item.id],
            ).length;
            const categoryPercentage = Math.round(
              (categoryChecked / category.items.length) * 100,
            );

            return (
              <div
                key={categoryIndex}
                style={{
                  marginBottom: "32px",
                  border: "1px solid #dee2e6",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    backgroundColor: "#e9ecef",
                    borderBottom: "1px solid #dee2e6",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                    {category.category}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: categoryPercentage === 100 ? "#28a745" : "#6c757d",
                    }}
                  >
                    {categoryChecked}/{category.items.length} (
                    {categoryPercentage}%)
                  </div>
                </div>

                <div style={{ padding: "16px" }}>
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "12px",
                        padding: "8px",
                        backgroundColor: checkedItems[item.id]
                          ? "#d4edda"
                          : "#fff",
                        borderRadius: "4px",
                        border: `1px solid ${checkedItems[item.id] ? "#c3e6cb" : "#e9ecef"}`,
                        cursor: "pointer",
                      }}
                      onClick={() => toggleCheck(item.id)}
                    >
                      <input
                        type="checkbox"
                        checked={checkedItems[item.id] || false}
                        onChange={() => toggleCheck(item.id)}
                        style={{
                          marginRight: "12px",
                          transform: "scale(1.2)",
                          cursor: "pointer",
                        }}
                      />
                      <label
                        style={{
                          cursor: "pointer",
                          textDecoration: checkedItems[item.id]
                            ? "line-through"
                            : "none",
                          color: checkedItems[item.id] ? "#155724" : "#212529",
                        }}
                      >
                        {item.text}
                      </label>
                      {checkedItems[item.id] && (
                        <span style={{ marginLeft: "auto", color: "#28a745" }}>
                          ✓
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* EAA Compliance Summary */}
          <div
            style={{
              marginBottom: "32px",
              padding: "20px",
              backgroundColor: "#e3f2fd",
              border: "1px solid #2196f3",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              📜 European Accessibility Act (EAA) Compliance
            </div>

            <p style={{ marginBottom: "16px" }}>
              The European Accessibility Act requires digital services to be
              accessible to people with disabilities. Your application should
              meet all the requirements above to ensure EAA compliance.
            </p>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                Key EAA Requirements:
              </div>
              <ul style={{ marginLeft: "20px" }}>
                <li>Perceivable information and user interface</li>
                <li>Operable user interface and navigation</li>
                <li>Understandable information and UI operation</li>
                <li>Robust content that works with assistive technologies</li>
                <li>Regular accessibility audits and testing</li>
                <li>Staff training on accessibility</li>
                <li>Accessibility statement publication</li>
              </ul>
            </div>

            {completionPercentage >= 90 && (
              <div
                style={{
                  padding: "12px",
                  backgroundColor: "#d4edda",
                  color: "#155724",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                🏆 Your application appears to meet EAA compliance requirements!
              </div>
            )}
          </div>

          {/* Resources and next steps */}
          <div
            style={{
              marginBottom: "32px",
              padding: "20px",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              🔗 Additional Resources
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                Testing Tools:
              </div>
              <ul style={{ marginLeft: "20px" }}>
                <li>axe DevTools (Browser extension for automated testing)</li>
                <li>WAVE Web Accessibility Evaluator</li>
                <li>Lighthouse Accessibility Audit</li>
                <li>Color Contrast Analyzers</li>
                <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              </ul>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                Guidelines and Standards:
              </div>
              <ul style={{ marginLeft: "20px" }}>
                <li>WCAG 2.1 Guidelines (W3C)</li>
                <li>European Accessibility Act (EAA)</li>
                <li>Section 508 (US Federal)</li>
                <li>ARIA Authoring Practices Guide</li>
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                Next Steps:
              </div>
              <ul style={{ marginLeft: "20px" }}>
                <li>Implement automated accessibility testing in CI/CD</li>
                <li>Train development team on accessibility best practices</li>
                <li>Establish regular accessibility audits</li>
                <li>Create accessibility statement for your website</li>
                <li>Set up user feedback mechanism for accessibility issues</li>
              </ul>
            </div>
          </div>

          {/* Workshop completion certificate */}
          {completionPercentage === 100 && (
            <div
              style={{
                marginBottom: "32px",
                padding: "30px",
                backgroundColor: "#f8f9fa",
                border: "3px solid #28a745",
                borderRadius: "12px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🏅</div>
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                  color: "#28a745",
                }}
              >
                Workshop Completion Certificate
              </div>
              <div style={{ fontSize: "18px", marginBottom: "12px" }}>
                Congratulations on completing the
              </div>
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "16px",
                }}
              >
                Accessibility from Scratch Workshop
              </div>
              <div style={{ fontSize: "16px", color: "#6c757d" }}>
                You've demonstrated comprehensive understanding of web
                accessibility principles, WCAG guidelines, and EAA compliance
                requirements.
              </div>
              <div
                style={{
                  fontSize: "14px",
                  marginTop: "16px",
                  fontStyle: "italic",
                }}
              >
                Keep making the web accessible for everyone! 🌍
              </div>
            </div>
          )}
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Final Task:</div>
          <p>Complete your accessibility journey by:</p>
          <ol>
            <li>Work through each checklist item systematically</li>
            <li>Test your application thoroughly using multiple methods</li>
            <li>Fix any issues discovered during testing</li>
            <li>Document your accessibility features and testing procedures</li>
            <li>
              Set up monitoring to prevent regression of accessibility issues
            </li>
            <li>Plan regular accessibility audits and updates</li>
            <li>
              Consider getting professional accessibility audit for critical
              applications
            </li>
            <li>
              Share your knowledge and help others build accessible experiences
            </li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">
            🧪 Comprehensive Testing Strategy:
          </div>
          <ul>
            <li>
              <strong>Automated:</strong> axe-core, Lighthouse, WAVE, Pa11y
            </li>
            <li>
              <strong>Manual:</strong> Keyboard navigation, screen reader
              testing, color contrast verification
            </li>
            <li>
              <strong>User Testing:</strong> Include people with disabilities in
              your testing process
            </li>
            <li>
              <strong>Device Testing:</strong> Test on mobile devices, tablets,
              different screen sizes
            </li>
            <li>
              <strong>Browser Testing:</strong> Test across different browsers
              and assistive technology combinations
            </li>
            <li>
              <strong>Performance:</strong> Ensure accessibility features don't
              impact performance negatively
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 Complete EAA Compliance:</div>
          <p>
            By completing this checklist and implementing all the fixes from the
            previous exercises, your application should meet the European
            Accessibility Act requirements for digital accessibility. Remember
            that accessibility is an ongoing process, not a one-time fix.
          </p>
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
