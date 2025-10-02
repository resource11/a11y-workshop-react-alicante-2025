import { useState, useEffect, useRef } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Solution05() {
  useDocumentTitle("Solution 5: Accessible Modals - Fixed");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"info" | "form" | "alert">("info");

  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstButtonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // ✅ Fixed: Focus management and ESC key handling
  useEffect(() => {
    if (showModal) {
      // Save reference to trigger element
      const previousFocus = document.activeElement as HTMLElement;

      // Focus first element in modal based on type
      setTimeout(() => {
        if (modalType === "form" && firstInputRef.current) {
          firstInputRef.current.focus();
        } else if (firstButtonRef.current) {
          firstButtonRef.current.focus();
        }
      }, 0);

      // ESC key handler
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      // Focus trap
      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab" && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleTabKey);

      // Hide background content from screen readers
      document.body.setAttribute("aria-hidden", "true");
      modalRef.current?.removeAttribute("aria-hidden");

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.removeEventListener("keydown", handleTabKey);
        document.body.removeAttribute("aria-hidden");

        // Return focus to trigger
        if (previousFocus && triggerRef.current) {
          triggerRef.current.focus();
        }
      };
    }
  }, [showModal]);

  const openModal = (type: "info" | "form" | "alert") => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className="page-header">
        <h1 tabIndex={-1}>Solution 5: Accessible Modals & Dialogs - Fixed</h1>
        <p className="exercise-intro">
          ✅ This shows properly implemented accessible modal dialogs with focus
          trapping, ESC key support, and proper ARIA attributes.
        </p>
      </header>

      <main className="exercise">
        <section className="fixed-demo">
          <div className="solution-banner">
            <div className="solution-title">✅ Fixed Implementation</div>
            <p>
              Accessible modals with complete focus management and ARIA support
            </p>
          </div>

          <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
            <button
              ref={triggerRef}
              onClick={() => openModal("info")}
              style={{
                padding: "12px 24px",
                backgroundColor: "#0066cc",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Open Information Modal
            </button>

            <button
              onClick={() => openModal("form")}
              style={{
                padding: "12px 24px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Open Form Modal
            </button>

            <button
              onClick={() => openModal("alert")}
              style={{
                padding: "12px 24px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Open Alert Dialog
            </button>
          </div>

          {/* ✅ Fixed: Accessible modal implementation */}
          {showModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
              onClick={(e) => {
                if (e.target === e.currentTarget) closeModal();
              }}
            >
              <div
                ref={modalRef}
                role={modalType === "alert" ? "alertdialog" : "dialog"}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                aria-modal="true"
                style={{
                  backgroundColor: "white",
                  padding: "24px",
                  borderRadius: "8px",
                  maxWidth: "500px",
                  width: "90%",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  border:
                    modalType === "alert"
                      ? "2px solid #d32f2f"
                      : "1px solid #ddd",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {modalType === "info" && (
                  <>
                    <h2 id="modal-title">Marine Conservation Information</h2>
                    <p id="modal-description">
                      Ocean temperatures are rising faster than predicted.
                      Immediate action is needed to protect vulnerable marine
                      species and ecosystems.
                    </p>
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        gap: "8px",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button
                        ref={firstButtonRef}
                        onClick={closeModal}
                        style={{ padding: "8px 16px" }}
                      >
                        Close
                      </button>
                      <button
                        onClick={() => alert("Learn more clicked")}
                        style={{
                          padding: "8px 16px",
                          backgroundColor: "#0066cc",
                          color: "white",
                          border: "none",
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </>
                )}
                {modalType === "form" && (
                  <>
                    <h2 id="modal-title">Volunteer Registration</h2>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("Form submitted");
                        closeModal();
                      }}
                    >
                      <div style={{ marginBottom: "16px" }}>
                        <label
                          htmlFor="volunteer-name"
                          style={{ display: "block", marginBottom: "4px" }}
                        >
                          Name *
                        </label>
                        <input
                          ref={firstInputRef}
                          id="volunteer-name"
                          type="text"
                          required
                          aria-required="true"
                          style={{ width: "100%", padding: "8px" }}
                        />
                      </div>

                      <div style={{ marginBottom: "16px" }}>
                        <label
                          htmlFor="volunteer-email"
                          style={{ display: "block", marginBottom: "4px" }}
                        >
                          Email *
                        </label>
                        <input
                          id="volunteer-email"
                          type="email"
                          required
                          aria-required="true"
                          style={{ width: "100%", padding: "8px" }}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          justifyContent: "flex-end",
                        }}
                      >
                        <button type="button" onClick={closeModal}>
                          Cancel
                        </button>
                        <button
                          type="submit"
                          style={{
                            backgroundColor: "#0066cc",
                            color: "white",
                            border: "none",
                            padding: "8px 16px",
                          }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </>
                )}
                {modalType === "alert" && (
                  <>
                    <h2 id="modal-title" style={{ color: "#d32f2f" }}>
                      ⚠️ Confirm Deletion
                    </h2>
                    <p id="modal-description">
                      Are you sure you want to delete this research data? This
                      action cannot be undone.
                    </p>
                    <div
                      style={{
                        marginTop: "20px",
                        display: "flex",
                        gap: "8px",
                        justifyContent: "flex-end",
                      }}
                    >
                      <button ref={firstButtonRef} onClick={closeModal}>
                        Cancel
                      </button>
                      <button
                        onClick={() => {
                          alert("Data deleted");
                          closeModal();
                        }}
                        style={{
                          backgroundColor: "#d32f2f",
                          color: "white",
                          border: "none",
                          padding: "8px 16px",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </section>

        <section className="solution-explanation">
          <div className="explanation-title">🔧 What We Fixed:</div>
          <ul>
            <li>
              <strong>Focus Trapping:</strong> Tab cycles only within modal
            </li>
            <li>
              <strong>ESC Key Support:</strong> Press Escape to close
            </li>
            <li>
              <strong>Focus Return:</strong> Focus returns to trigger button
              when closed
            </li>
            <li>
              <strong>ARIA Roles:</strong> Proper dialog/alertdialog roles
            </li>
            <li>
              <strong>ARIA Labels:</strong> aria-labelledby and aria-describedby
            </li>
            <li>
              <strong>Background Hiding:</strong> aria-hidden on background
              content
            </li>
            <li>
              <strong>Semantic Buttons:</strong> Real button elements for
              triggers
            </li>
            <li>
              <strong>Initial Focus:</strong> Focus moves to appropriate first
              element
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
              <strong>WCAG 2.1.2:</strong> No Keyboard Trap - except for modals
              (intended trap)
            </li>
            <li>
              <strong>WCAG 2.4.3:</strong> Focus Order - logical focus
              progression within modal
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - proper dialog
              roles and labels
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
