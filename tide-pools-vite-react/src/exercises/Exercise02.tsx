import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise02() {
  useDocumentTitle("Exercise 2: Text Alternatives");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 2: Text Alternatives</div>
        <p className="exercise-intro">
          Images, icons, and visual content need text alternatives for screen
          readers and users who can't see visual elements.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">🚨 Broken Text Alternatives</div>

          {/* Broken: Missing alt text */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Product Showcase:
            </div>
            <img
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop"
              width="300"
              height="200"
              style={{ borderRadius: "8px", marginRight: "16px" }}
            />
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop"
              width="300"
              height="200"
              alt="Decorative ocean waves background"
              style={{ borderRadius: "8px" }}
            />
          </div>

          {/* Broken: Icon-only buttons without accessible names */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Search Tools:
            </div>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  flex: 1,
                }}
              />

              {/* Broken: No accessible name for icon button */}
              <button
                onClick={() => alert(`Searching for: ${searchQuery}`)}
                style={{
                  padding: "8px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {/* SVG search icon without proper labeling */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>

              {/* Broken: Icon button with confusing labeling */}
              <button
                onClick={() => alert("Clearing search")}
                style={{
                  padding: "8px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {/* SVG X icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                <span>Button</span>
              </button>
            </div>
          </div>

          {/* Broken: Linked images without proper alt or link context */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Navigation Cards:
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Navigate to products");
                }}
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=150&h=100&fit=crop"
                  width="150"
                  height="100"
                  style={{ borderRadius: "4px", display: "block" }}
                />
              </a>

              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Navigate to services");
                }}
                style={{ textDecoration: "none" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=150&h=100&fit=crop"
                  width="150"
                  height="100"
                  alt="Click here"
                  style={{ borderRadius: "4px", display: "block" }}
                />
              </a>
            </div>
          </div>

          {/* Broken: Decorative images that should be hidden from screen readers */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
              Article Section:
            </div>
            <div
              style={{
                padding: "16px",
                border: "1px solid #dee2e6",
                borderRadius: "8px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=50&h=50&fit=crop"
                width="50"
                height="50"
                alt="Ocean waves decoration"
                style={{
                  float: "right",
                  borderRadius: "50%",
                  margin: "0 0 8px 8px",
                }}
              />
              <h3 style={{ margin: "0 0 8px 0" }}>Marine Conservation Tips</h3>
              <p>
                Learn about protecting our ocean ecosystems through simple daily
                actions...
              </p>
            </div>
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">
            🚨 Text Alternative Problems to Fix:
          </div>
          <ul>
            <li>
              <strong>Missing Alt Text:</strong> Informative images have no alt
              attributes
            </li>
            <li>
              <strong>Icon-Only Buttons:</strong> No accessible names for screen
              readers
            </li>
            <li>
              <strong>Poor Alt Text:</strong> Generic phrases like "Click here"
              don't describe purpose
            </li>
            <li>
              <strong>Decorative Images:</strong> Should be hidden from screen
              readers with alt="" or aria-hidden
            </li>
            <li>
              <strong>Linked Images:</strong> No context about where the link
              goes
            </li>
            <li>
              <strong>Redundant Text:</strong> Alt text repeats visible text
              unnecessarily
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Fix the text alternatives by:</p>
          <ol>
            <li>
              Add meaningful alt text to informative images (describe content,
              not appearance)
            </li>
            <li>
              Use alt="" or aria-hidden="true" for purely decorative images
            </li>
            <li>
              Add aria-label to icon-only buttons describing their function
            </li>
            <li>Provide context for linked images (where does the link go?)</li>
            <li>Hide decorative SVG icons with aria-hidden="true"</li>
            <li>Ensure alt text is concise but descriptive</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Screen Reader:</strong> Use VoiceOver or NVDA to hear how
              images are announced
            </li>
            <li>
              <strong>Image Blocking:</strong> Disable images in browser - does
              content still make sense?
            </li>
            <li>
              <strong>Accessibility Panel:</strong> Check Storybook
              accessibility panel for accessible names
            </li>
            <li>
              <strong>Context Check:</strong> Would the alt text make sense
              without seeing the image?
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 5 (Perceivable):</strong> Text alternatives for
              non-text content
            </li>
            <li>
              <strong>WCAG 1.1.1:</strong> Non-text Content - all images need
              appropriate alternatives
            </li>
            <li>
              <strong>WCAG 2.4.4:</strong> Link Purpose - linked images need
              context
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - interactive
              elements need accessible names
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
