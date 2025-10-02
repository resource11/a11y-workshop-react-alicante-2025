import { useState, useRef, useEffect } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Solution06() {
  useDocumentTitle("Solution 6: Accessible Tabs & Accordions - Fixed");
  const [activeTab, setActiveTab] = useState(0);
  const [expandedAccordions, setExpandedAccordions] = useState<number[]>([]);
  const tabsRef = useRef<HTMLButtonElement[]>([]);

  const tabData = [
    {
      id: "tab1",
      title: "Ocean Temperature",
      content:
        "Current ocean temperatures are rising due to climate change. Monitoring shows significant increases in surface temperatures across all major ocean basins.",
    },
    {
      id: "tab2",
      title: "Marine Species",
      content:
        "Diverse species inhabit our oceans including fish, mammals, invertebrates, and microscopic organisms. Each plays a crucial role in marine ecosystems.",
    },
    {
      id: "tab3",
      title: "Conservation Efforts",
      content:
        "Marine protected areas, sustainable fishing practices, and pollution reduction are key strategies for ocean conservation.",
    },
  ];

  const accordionData = [
    {
      title: "What are tide pools?",
      content:
        "Tide pools are rocky pools by the ocean that are filled with seawater during high tide and may be isolated during low tide.",
    },
    {
      title: "Which animals live in tide pools?",
      content:
        "Common tide pool animals include sea anemones, hermit crabs, sea stars, mussels, barnacles, and various fish species.",
    },
    {
      title: "How can I help protect tide pools?",
      content:
        "Look but don't touch, stay on designated paths, don't remove animals or rocks, and participate in beach cleanup efforts.",
    },
  ];

  // ✅ Fixed: Keyboard navigation for tabs
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        const prevIndex = index === 0 ? tabData.length - 1 : index - 1;
        setActiveTab(prevIndex);
        tabsRef.current[prevIndex]?.focus();
        break;
      case "ArrowRight":
        e.preventDefault();
        const nextIndex = index === tabData.length - 1 ? 0 : index + 1;
        setActiveTab(nextIndex);
        tabsRef.current[nextIndex]?.focus();
        break;
      case "Home":
        e.preventDefault();
        setActiveTab(0);
        tabsRef.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        setActiveTab(tabData.length - 1);
        tabsRef.current[tabData.length - 1]?.focus();
        break;
    }
  };

  const toggleAccordion = (index: number) => {
    setExpandedAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <>
      <header className="page-header">
        <h1 tabIndex={-1}>Solution 6: Accessible Tabs & Accordions - Fixed</h1>
        <p className="exercise-intro">
          ✅ This demonstrates properly implemented tabs and accordions with
          full keyboard navigation and ARIA support.
        </p>
      </header>

      <main className="exercise">
        <section className="fixed-demo">
          <div className="solution-banner">
            <div className="solution-title">✅ Fixed Implementation</div>
            <p>
              Accessible tabs and accordions with proper ARIA patterns and
              keyboard support
            </p>
          </div>

          {/* ✅ Fixed: Accessible Tabs */}
          <div style={{ marginBottom: "40px" }}>
            <h2>Marine Research Topics</h2>

            <div role="tablist" aria-label="Marine research information">
              {tabData.map((tab, index) => (
                <button
                  key={tab.id}
                  ref={(el) => (tabsRef.current[index] = el!)}
                  role="tab"
                  id={`tab-${index}`}
                  aria-controls={`tabpanel-${index}`}
                  aria-selected={activeTab === index}
                  tabIndex={activeTab === index ? 0 : -1}
                  onClick={() => setActiveTab(index)}
                  onKeyDown={(e) => handleTabKeyDown(e, index)}
                  style={{
                    padding: "12px 20px",
                    marginRight: "4px",
                    backgroundColor:
                      activeTab === index ? "#0066cc" : "#f8f9fa",
                    color: activeTab === index ? "white" : "#333",
                    border: "2px solid #0066cc",
                    borderBottom:
                      activeTab === index ? "none" : "2px solid #0066cc",
                    borderRadius: "8px 8px 0 0",
                    cursor: "pointer",
                    fontWeight: activeTab === index ? "bold" : "normal",
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {tabData.map((tab, index) => (
              <div
                key={`panel-${index}`}
                role="tabpanel"
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                hidden={activeTab !== index}
                style={{
                  padding: "20px",
                  border: "2px solid #0066cc",
                  borderTop: "none",
                  backgroundColor: "white",
                  minHeight: "100px",
                }}
              >
                {activeTab === index && <p>{tab.content}</p>}
              </div>
            ))}
          </div>

          {/* ✅ Fixed: Accessible Accordions */}
          <div>
            <h2>Frequently Asked Questions</h2>

            {accordionData.map((item, index) => {
              const isExpanded = expandedAccordions.includes(index);
              return (
                <div
                  key={index}
                  style={{
                    marginBottom: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                  }}
                >
                  <h3 style={{ margin: 0 }}>
                    <button
                      id={`accordion-header-${index}`}
                      aria-expanded={isExpanded}
                      aria-controls={`accordion-panel-${index}`}
                      onClick={() => toggleAccordion(index)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "16px",
                        backgroundColor: isExpanded ? "#e3f2fd" : "#f8f9fa",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {item.title}
                      <span
                        aria-hidden="true"
                        style={{
                          transform: isExpanded
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        ▶
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`accordion-panel-${index}`}
                    role="region"
                    aria-labelledby={`accordion-header-${index}`}
                    hidden={!isExpanded}
                    style={{
                      padding: isExpanded ? "16px" : "0",
                      backgroundColor: "white",
                      borderTop: isExpanded ? "1px solid #ddd" : "none",
                    }}
                  >
                    {isExpanded && <p style={{ margin: 0 }}>{item.content}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="solution-explanation">
          <div className="explanation-title">🔧 What We Fixed:</div>
          <ul>
            <li>
              <strong>ARIA Tablist Pattern:</strong> Proper role="tablist",
              role="tab", role="tabpanel"
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Arrow keys navigate tabs,
              Home/End keys
            </li>
            <li>
              <strong>Roving Tabindex:</strong> Only active tab is in tab order
            </li>
            <li>
              <strong>ARIA States:</strong> aria-selected, aria-expanded,
              aria-controls
            </li>
            <li>
              <strong>Accordion Regions:</strong> Proper role="region" for
              accordion panels
            </li>
            <li>
              <strong>Semantic Headings:</strong> Accordion buttons wrapped in
              proper headings
            </li>
            <li>
              <strong>Visual Indicators:</strong> Clear expanded/collapsed
              states
            </li>
            <li>
              <strong>Focus Management:</strong> Focus follows activation for
              tabs
            </li>
          </ul>
        </section>

        <section className="accessibility-notes">
          <div className="notes-title">♿ Accessibility Benefits:</div>
          <ul>
            <li>
              <strong>Screen Readers:</strong> Announce tab/accordion states and
              relationships
            </li>
            <li>
              <strong>Keyboard Users:</strong> Full keyboard navigation with
              arrow keys
            </li>
            <li>
              <strong>Voice Control:</strong> Can target tabs and accordions by
              role
            </li>
            <li>
              <strong>Cognitive:</strong> Clear visual and programmatic state
              indicators
            </li>
            <li>
              <strong>Mobile:</strong> Large touch targets with clear
              interaction patterns
            </li>
          </ul>
        </section>

        <section className="eaa-compliance">
          <div className="compliance-title">📋 EAA Compliance Achieved:</div>
          <ul>
            <li>
              <strong>Article 6 (Operable):</strong> All functionality keyboard
              accessible
            </li>
            <li>
              <strong>WCAG 2.1.1:</strong> Keyboard - all functions available
              from keyboard
            </li>
            <li>
              <strong>WCAG 2.4.3:</strong> Focus Order - logical focus sequence
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - proper ARIA
              implementation
            </li>
            <li>
              <strong>WCAG 1.4.13:</strong> Content on Hover - no unexpected
              focus changes
            </li>
          </ul>
        </section>
      </main>

      <footer className="page-footer">
        <div className="footer-content">
          <nav aria-label="Footer navigation">
            <ul>
              <li>
                <a href="/about">About This Workshop</a>
              </li>
              <li>
                <a href="/resources">Accessibility Resources</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
