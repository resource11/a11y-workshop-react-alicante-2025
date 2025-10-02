import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise04() {
  useDocumentTitle("Exercise 4: Routing & Focus Management");
  const [currentPage, setCurrentPage] = useState("home");

  const navigateToPage = (page: string, pageName: string) => {
    setCurrentPage(page);
    // Broken: No focus management on page change
    // Should focus the h1 but doesn't
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "about":
        return (
          <div>
            <div className="big">About Marine Conservation</div>
            <p>
              Our mission is to protect and preserve marine ecosystems through
              research, education, and conservation efforts.
            </p>
            <p>
              Founded in 2010, we've been working with local communities to
              establish marine protected areas and promote sustainable fishing
              practices.
            </p>
          </div>
        );
      case "research":
        return (
          <div>
            <div className="big">Current Research Projects</div>
            <p>
              We're currently studying the effects of ocean acidification on
              coral reef ecosystems.
            </p>
            <ul>
              <li>Coral bleaching patterns in warming waters</li>
              <li>Fish population dynamics in protected areas</li>
              <li>Microplastic impact on marine food chains</li>
            </ul>
          </div>
        );
      case "contact":
        return (
          <div>
            <div className="big">Contact Information</div>
            <p>Get in touch with our research team:</p>
            <address>
              Marine Research Institute
              <br />
              123 Ocean Drive
              <br />
              Coastal City, CC 12345
              <br />
              Email: info@marineresearch.org
              <br />
              Phone: (555) 123-4567
            </address>
          </div>
        );
      default:
        return (
          <div>
            <div className="big">Welcome to Marine Conservation Hub</div>
            <p>
              Discover the wonders of our ocean ecosystems and learn how you can
              help protect them for future generations.
            </p>
            <p>
              Explore our research, educational resources, and conservation
              initiatives.
            </p>
          </div>
        );
    }
  };

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 4: Routing & Focus Management</div>
        <p className="exercise-intro">
          When users navigate between pages or views, focus must be managed
          properly to ensure screen reader users know where they are and what
          changed.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">🚨 Broken Navigation & Focus</div>

          {/* Broken navigation - no focus management */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Navigation (No Focus Management):
            </div>

            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "20px",
                padding: "12px",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
              }}
            >
              <span
                onClick={() => navigateToPage("home", "Home")}
                style={{
                  padding: "8px 16px",
                  backgroundColor:
                    currentPage === "home" ? "#007bff" : "#e9ecef",
                  color: currentPage === "home" ? "white" : "#495057",
                  cursor: "pointer",
                  borderRadius: "4px",
                  textDecoration: currentPage === "home" ? "none" : "underline",
                }}
              >
                Home
              </span>

              <span
                onClick={() => navigateToPage("about", "About")}
                style={{
                  padding: "8px 16px",
                  backgroundColor:
                    currentPage === "about" ? "#007bff" : "#e9ecef",
                  color: currentPage === "about" ? "white" : "#495057",
                  cursor: "pointer",
                  borderRadius: "4px",
                  textDecoration:
                    currentPage === "about" ? "none" : "underline",
                }}
              >
                About
              </span>

              <span
                onClick={() => navigateToPage("research", "Research")}
                style={{
                  padding: "8px 16px",
                  backgroundColor:
                    currentPage === "research" ? "#007bff" : "#e9ecef",
                  color: currentPage === "research" ? "white" : "#495057",
                  cursor: "pointer",
                  borderRadius: "4px",
                  textDecoration:
                    currentPage === "research" ? "none" : "underline",
                }}
              >
                Research
              </span>

              <span
                onClick={() => navigateToPage("contact", "Contact")}
                style={{
                  padding: "8px 16px",
                  backgroundColor:
                    currentPage === "contact" ? "#007bff" : "#e9ecef",
                  color: currentPage === "contact" ? "white" : "#495057",
                  cursor: "pointer",
                  borderRadius: "4px",
                  textDecoration:
                    currentPage === "contact" ? "none" : "underline",
                }}
              >
                Contact
              </span>
            </div>

            {/* Page content area - no focus management */}
            <div
              style={{
                padding: "20px",
                border: "1px solid #dee2e6",
                borderRadius: "4px",
                backgroundColor: "white",
                minHeight: "200px",
              }}
            >
              {renderCurrentPage()}
            </div>
          </div>

          {/* Additional broken example - breadcrumb navigation */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "12px" }}>
              Broken Breadcrumb Navigation:
            </div>

            <div
              style={{
                padding: "8px 12px",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
            >
              <span
                onClick={() => navigateToPage("home", "Home")}
                style={{ color: "#007bff", cursor: "pointer" }}
              >
                Home
              </span>
              {currentPage !== "home" && (
                <>
                  <span style={{ margin: "0 8px", color: "#6c757d" }}>/</span>
                  <span
                    style={{ color: "#495057", textTransform: "capitalize" }}
                  >
                    {currentPage}
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Broken modal-like overlay simulation */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "12px" }}>
              Broken Dynamic Content (No Announcements):
            </div>

            <div
              onClick={() =>
                alert("This content change isn't announced to screen readers!")
              }
              style={{
                padding: "12px",
                border: "2px dashed #ccc",
                borderRadius: "4px",
                cursor: "pointer",
                textAlign: "center",
                backgroundColor: "#f9f9f9",
              }}
            >
              Click to trigger content change (not announced)
            </div>
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">
            🚨 Routing & Focus Problems to Fix:
          </div>
          <ul>
            <li>
              <strong>No Focus Management:</strong> Focus stays on navigation
              after page change
            </li>
            <li>
              <strong>Screen Reader Confusion:</strong> No announcement when
              page content changes
            </li>
            <li>
              <strong>Non-Semantic Navigation:</strong> Spans with click
              handlers instead of proper links/buttons
            </li>
            <li>
              <strong>Missing Page Titles:</strong> Document title doesn't
              update with route changes
            </li>
            <li>
              <strong>No Skip Links:</strong> No way to bypass navigation to
              main content
            </li>
            <li>
              <strong>Broken Keyboard Navigation:</strong> Can't use keyboard to
              navigate between pages
            </li>
            <li>
              <strong>No Live Regions:</strong> Dynamic content changes not
              announced
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Fix the routing and focus management by:</p>
          <ol>
            <li>
              Send focus to the main heading (h1) when page content changes
            </li>
            <li>Update document.title dynamically for each page</li>
            <li>Convert navigation spans to proper buttons or links</li>
            <li>
              Add aria-current="page" to indicate current page in navigation
            </li>
            <li>Implement skip links to main content</li>
            <li>Add live regions for dynamic content announcements</li>
            <li>Ensure all navigation works with keyboard only</li>
            <li>Test with screen readers to verify announcements</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Screen Reader:</strong> Use VoiceOver or NVDA - should
              announce new page content
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Tab to navigation, use
              Enter/Space to change pages
            </li>
            <li>
              <strong>Focus Tracking:</strong> Watch where focus goes after
              navigation
            </li>
            <li>
              <strong>Page Title:</strong> Check browser tab title updates with
              each page
            </li>
            <li>
              <strong>Skip Links:</strong> Tab to skip link, verify it jumps to
              main content
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 6 (Operable):</strong> Keyboard accessible
              navigation
            </li>
            <li>
              <strong>WCAG 2.4.1:</strong> Bypass Blocks - skip links to main
              content
            </li>
            <li>
              <strong>WCAG 2.4.2:</strong> Page Titled - descriptive page titles
            </li>
            <li>
              <strong>WCAG 2.4.3:</strong> Focus Order - logical focus
              progression
            </li>
            <li>
              <strong>WCAG 3.2.2:</strong> On Input - no unexpected context
              changes
            </li>
            <li>
              <strong>WCAG 4.1.3:</strong> Status Messages - important changes
              announced
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
