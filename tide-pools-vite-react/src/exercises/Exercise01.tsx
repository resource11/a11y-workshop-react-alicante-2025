import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise01() {
  useDocumentTitle("Exercise 1: Semantic HTML");

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 1: Semantic HTML</div>
        <p className="exercise-intro">
          The foundation of web accessibility starts with semantic HTML. Screen
          readers and other assistive technologies rely on proper markup to
          understand content structure.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">Welcome to Our Site</div>
          <div className="medium">About Our Services</div>
          <div className="medium">Our Team</div>
          <div className="small">Contact Information</div>
          <div
            className="link-style"
            onClick={() => alert("Clicked!")}
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Click Here
          </div>
          <div
            className="button-style"
            onClick={() => alert("Submitted!")}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              cursor: "pointer",
              marginTop: "8px",
              display: "inline-block",
            }}
          >
            Submit Form
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">🚨 Accessibility Problems to Fix:</div>
          <ul>
            <li>
              <strong>Document Structure:</strong> Divs instead of semantic page
              landmarks (header, main, footer)
            </li>
            <li>
              <strong>Heading Issues:</strong> Styled divs instead of semantic
              headings (h1, h2, h3)
            </li>
            <li>
              <strong>Interactive Elements:</strong> Divs and spans with click
              handlers instead of buttons/links
            </li>
            <li>
              <strong>Navigation Structure:</strong> Divs instead of proper nav
              with ul/li lists
            </li>
            <li>
              <strong>Missing Context:</strong> "Click Here" doesn't describe
              the action
            </li>
            <li>
              <strong>Keyboard Access:</strong> Divs and spans aren't keyboard
              accessible
            </li>
            <li>
              <strong>Screen Reader Issues:</strong> No semantic meaning for
              assistive technology
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Fix this implementation by:</p>
          <ol>
            <li>
              Convert page divs to proper semantic elements (header, main,
              footer)
            </li>
            <li>
              Replace styled divs with proper heading elements (h1, h2, h3)
            </li>
            <li>
              Use semantic button and anchor elements instead of divs with click
              handlers
            </li>
            <li>
              Convert footer navigation to proper nav with ul/li structure
            </li>
            <li>Ensure proper heading hierarchy and document landmarks</li>
            <li>Test with a screen reader or keyboard navigation</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Screen Reader:</strong> Use VoiceOver (Mac) or NVDA
              (Windows) to navigate by landmarks and headings
            </li>
            <li>
              <strong>Keyboard:</strong> Tab through interactive elements - all
              should be accessible
            </li>
            <li>
              <strong>Browser DevTools:</strong> Check the accessibility tree
              for proper structure
            </li>
            <li>
              <strong>Landmark Navigation:</strong> Screen readers should find
              header, main, footer, and nav regions
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 5 (Perceivable):</strong> Information structure
              must be available to all users
            </li>
            <li>
              <strong>Article 8 (Robust):</strong> Content must work with
              assistive technologies
            </li>
            <li>
              <strong>WCAG 1.3.1:</strong> Info and Relationships - semantic
              structure programmatically determined
            </li>
            <li>
              <strong>WCAG 2.4.1:</strong> Bypass Blocks - landmark navigation
              allows skipping content sections
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - proper semantic
              elements provide context
            </li>
          </ul>
        </div>
      </div>

      {/* Broken: Should be <footer> but using div */}
      <div className="page-footer">
        <div className="footer-content">
          {/* Broken: Should be <nav> but using div */}
          <div>
            {/* Broken: Should be <ul><li> but using divs */}
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
