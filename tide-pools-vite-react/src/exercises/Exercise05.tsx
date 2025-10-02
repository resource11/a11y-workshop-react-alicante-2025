import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise05() {
  useDocumentTitle("Exercise 5: Accessible Modals & Dialogs");
  const [showSimpleModal, setShowSimpleModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 5: Accessible Modals & Dialogs</div>
        <p className="exercise-intro">
          Modal dialogs must trap focus, provide clear labels, and be properly
          announced to screen reader users.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">🚨 Broken Modal Implementations</div>

          {/* Broken simple modal */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Simple Modal (No Focus Management):
            </div>

            <span
              onClick={() => setShowSimpleModal(true)}
              style={{
                padding: "12px 24px",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Open Information Modal
            </span>

            {showSimpleModal && (
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
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "8px",
                    maxWidth: "500px",
                    width: "90%",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "16px",
                    }}
                  >
                    Marine Conservation Alert
                  </div>
                  <p>
                    Recent studies show that ocean temperatures are rising
                    faster than predicted. Immediate action is needed to protect
                    vulnerable marine species.
                  </p>
                  <p>
                    This modal demonstrates several accessibility problems that
                    need to be fixed.
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <span
                      onClick={() => setShowSimpleModal(false)}
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "4px",
                        marginRight: "8px",
                      }}
                    >
                      Close
                    </span>
                    <span
                      onClick={() => alert("Would navigate to more info")}
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#28a745",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Broken form modal */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Form Modal (Focus Escapes):
            </div>

            <span
              onClick={() => setShowFormModal(true)}
              style={{
                padding: "12px 24px",
                backgroundColor: "#28a745",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Volunteer Registration
            </span>

            {showFormModal && (
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
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "8px",
                    maxWidth: "400px",
                    width: "90%",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      marginBottom: "16px",
                    }}
                  >
                    Volunteer Registration Form
                  </div>

                  <form>
                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ marginBottom: "4px" }}>Name:</div>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ marginBottom: "4px" }}>Email:</div>
                      <input
                        type="email"
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <div style={{ marginBottom: "4px" }}>Interests:</div>
                      <textarea
                        rows={3}
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: "4px",
                          border: "1px solid #ddd",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "flex-end",
                      }}
                    >
                      <span
                        onClick={() => setShowFormModal(false)}
                        style={{
                          padding: "8px 16px",
                          backgroundColor: "#6c757d",
                          color: "white",
                          cursor: "pointer",
                          borderRadius: "4px",
                        }}
                      >
                        Cancel
                      </span>
                      <span
                        onClick={() => {
                          alert("Registration would be processed");
                          setShowFormModal(false);
                        }}
                        style={{
                          padding: "8px 16px",
                          backgroundColor: "#007bff",
                          color: "white",
                          cursor: "pointer",
                          borderRadius: "4px",
                        }}
                      >
                        Register
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Broken alert modal */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Alert Dialog (No Proper Role):
            </div>

            <span
              onClick={() => setShowAlertModal(true)}
              style={{
                padding: "12px 24px",
                backgroundColor: "#dc3545",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Delete Research Data
            </span>

            {showAlertModal && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1000,
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "24px",
                    borderRadius: "8px",
                    maxWidth: "400px",
                    width: "90%",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                    border: "2px solid #dc3545",
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "16px",
                      color: "#dc3545",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    ⚠️ Confirm Deletion
                  </div>

                  <p style={{ marginBottom: "20px" }}>
                    Are you sure you want to delete this research data? This
                    action cannot be undone. All collected measurements and
                    observations will be permanently removed.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      justifyContent: "flex-end",
                    }}
                  >
                    <span
                      onClick={() => setShowAlertModal(false)}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      Cancel
                    </span>
                    <span
                      onClick={() => {
                        alert("Data would be deleted");
                        setShowAlertModal(false);
                      }}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#dc3545",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      Delete Data
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Broken nested modal example */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Additional Modal Problems:
            </div>

            <div
              style={{
                padding: "16px",
                border: "2px dashed #ffc107",
                borderRadius: "8px",
                backgroundColor: "#fff3cd",
              }}
            >
              <p style={{ margin: "0 0 12px 0" }}>
                <strong>Common Issues:</strong>
              </p>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                <li>Focus can escape the modal and reach background content</li>
                <li>No focus trap - Tab/Shift+Tab don't cycle within modal</li>
                <li>ESC key doesn't close the modal</li>
                <li>Clicking outside doesn't close (inconsistent UX)</li>
                <li>No role="dialog" or role="alertdialog"</li>
                <li>Missing aria-labelledby and aria-describedby</li>
                <li>Background content not hidden with aria-hidden="true"</li>
                <li>No initial focus management when modal opens</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="problems">
          <div className="problem-title">
            🚨 Modal Accessibility Problems to Fix:
          </div>
          <ul>
            <li>
              <strong>No Focus Trapping:</strong> Tab can escape modal to
              background content
            </li>
            <li>
              <strong>Missing Dialog Roles:</strong> No role="dialog" or
              role="alertdialog"
            </li>
            <li>
              <strong>Poor Initial Focus:</strong> Focus doesn't go to
              appropriate element when modal opens
            </li>
            <li>
              <strong>No ESC Key Support:</strong> Can't close modal with Escape
              key
            </li>
            <li>
              <strong>Missing ARIA Labels:</strong> No aria-labelledby or
              aria-describedby
            </li>
            <li>
              <strong>Background Not Hidden:</strong> Screen readers can still
              access background content
            </li>
            <li>
              <strong>Non-Semantic Triggers:</strong> Spans instead of buttons
              to open modals
            </li>
            <li>
              <strong>Poor Return Focus:</strong> Focus doesn't return to
              trigger when modal closes
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Make the modals fully accessible by:</p>
          <ol>
            <li>Add role="dialog" or role="alertdialog" to modal containers</li>
            <li>Implement focus trapping (Tab cycles only within modal)</li>
            <li>
              Set initial focus to appropriate element (close button, first
              input, etc.)
            </li>
            <li>Add ESC key handler to close modals</li>
            <li>Use aria-labelledby to reference modal title</li>
            <li>Use aria-describedby for additional context if needed</li>
            <li>
              Add aria-hidden="true" to background content when modal is open
            </li>
            <li>Return focus to trigger element when modal closes</li>
            <li>Convert modal triggers to proper button elements</li>
            <li>Consider adding click-outside-to-close functionality</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Keyboard Only:</strong> Use Tab/Shift+Tab - should cycle
              only within modal
            </li>
            <li>
              <strong>ESC Key:</strong> Press Escape - should close modal and
              return focus
            </li>
            <li>
              <strong>Screen Reader:</strong> Verify modal purpose and content
              are announced
            </li>
            <li>
              <strong>Focus Management:</strong> Check initial focus and focus
              return on close
            </li>
            <li>
              <strong>Background Interaction:</strong> Ensure background content
              is inaccessible
            </li>
            <li>
              <strong>Modal Stacking:</strong> Test if multiple modals can open
              (should prevent)
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
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
              <strong>WCAG 3.2.1:</strong> On Focus - no unexpected context
              changes
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - proper dialog
              roles and labels
            </li>
            <li>
              <strong>WCAG 4.1.3:</strong> Status Messages - modal state changes
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
