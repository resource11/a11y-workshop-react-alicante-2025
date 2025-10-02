import { useState } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise07() {
  useDocumentTitle("Exercise 7: Forms & Errors");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    marineExperience: "",
    emergencyContact: "",
    dietaryRestrictions: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.name.trim()) {
      newErrors.push("Full name is required");
    }

    if (!formData.email.trim()) {
      newErrors.push("Email address is required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push("Email address is invalid");
    }

    if (!formData.phone.trim()) {
      newErrors.push("Phone number is required");
    }

    if (!formData.birthDate) {
      newErrors.push("Birth date is required");
    }

    if (!formData.marineExperience.trim()) {
      newErrors.push("Marine experience description is required");
    }

    if (!formData.emergencyContact.trim()) {
      newErrors.push("Emergency contact is required");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (validateForm()) {
      alert("Registration successful! (This is just a demo)");
    }
    // Broken: No focus management to first error
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Broken: Should clear specific field errors when user starts typing
  };

  return (
    <div>
      {/* Broken: Should be <header> but using div */}
      <div className="page-header">
        <div className="big">Exercise 7: Forms & Errors</div>
        <p className="exercise-intro">
          Forms must provide clear labels, associate error messages properly,
          and manage focus to help users understand and fix validation issues.
        </p>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big">🚨 Broken Form Implementation</div>

          {/* Broken: Missing error summary */}
          {submitted && errors.length > 0 && (
            <div
              style={{
                padding: "16px",
                margin: "20px 0",
                backgroundColor: "#f8d7da",
                border: "1px solid #f5c6cb",
                borderRadius: "4px",
                color: "#721c24",
              }}
            >
              <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                Please fix the following errors:
              </div>
              <div>
                {errors.map((error, index) => (
                  <div key={index}>• {error}</div>
                ))}
              </div>
            </div>
          )}

          <form
            style={{
              maxWidth: "600px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {/* Broken: Input without proper label association */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
                Full Name *
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border:
                    submitted && !formData.name.trim()
                      ? "2px solid #dc3545"
                      : "1px solid #ccc",
                }}
              />
              {submitted && !formData.name.trim() && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Full name is required
                </div>
              )}
            </div>

            {/* Broken: Email field with poor error association */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
                Email Address *
              </div>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border:
                    submitted &&
                    (!formData.email.trim() ||
                      !/\S+@\S+\.\S+/.test(formData.email))
                      ? "2px solid #dc3545"
                      : "1px solid #ccc",
                }}
              />
              {submitted && !formData.email.trim() && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Email address is required
                </div>
              )}
              {submitted &&
                formData.email.trim() &&
                !/\S+@\S+\.\S+/.test(formData.email) && (
                  <div
                    style={{
                      color: "#dc3545",
                      fontSize: "14px",
                      marginTop: "4px",
                    }}
                  >
                    Please enter a valid email address
                  </div>
                )}
            </div>

            {/* Broken: Phone field without proper validation feedback */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
                Phone Number *
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="(555) 123-4567"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border:
                    submitted && !formData.phone.trim()
                      ? "2px solid #dc3545"
                      : "1px solid #ccc",
                }}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}
              >
                We'll only use this for emergency contact during marine
                activities
              </div>
              {submitted && !formData.phone.trim() && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Phone number is required
                </div>
              )}
            </div>

            {/* Broken: Date field without clear requirements */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
                Birth Date *
              </div>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleInputChange("birthDate", e.target.value)}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border:
                    submitted && !formData.birthDate
                      ? "2px solid #dc3545"
                      : "1px solid #ccc",
                }}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}
              >
                Must be 18 or older to participate in marine conservation
                activities
              </div>
              {submitted && !formData.birthDate && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Birth date is required
                </div>
              )}
            </div>

            {/* Broken: Textarea without proper labeling */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
                Marine Experience *
              </div>
              <textarea
                value={formData.marineExperience}
                onChange={(e) =>
                  handleInputChange("marineExperience", e.target.value)
                }
                placeholder="Describe any previous experience with marine life, diving, snorkeling, etc."
                rows={4}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border:
                    submitted && !formData.marineExperience.trim()
                      ? "2px solid #dc3545"
                      : "1px solid #ccc",
                  fontFamily: "inherit",
                }}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}
              >
                Minimum 100 characters required. Include any certifications.
              </div>
              {submitted && !formData.marineExperience.trim() && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Marine experience description is required
                </div>
              )}
            </div>

            {/* Broken: Emergency contact without clear association */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
                Emergency Contact *
              </div>
              <input
                type="text"
                value={formData.emergencyContact}
                onChange={(e) =>
                  handleInputChange("emergencyContact", e.target.value)
                }
                placeholder="Full name and phone number"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border:
                    submitted && !formData.emergencyContact.trim()
                      ? "2px solid #dc3545"
                      : "1px solid #ccc",
                }}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}
              >
                Person to contact in case of emergency (not yourself)
              </div>
              {submitted && !formData.emergencyContact.trim() && (
                <div
                  style={{
                    color: "#dc3545",
                    fontSize: "14px",
                    marginTop: "4px",
                  }}
                >
                  Emergency contact is required
                </div>
              )}
            </div>

            {/* Optional field - should not cause validation errors */}
            <div style={{ marginBottom: "20px" }}>
              <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
                Dietary Restrictions
              </div>
              <input
                type="text"
                value={formData.dietaryRestrictions}
                onChange={(e) =>
                  handleInputChange("dietaryRestrictions", e.target.value)
                }
                placeholder="Any allergies or dietary requirements (optional)"
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "4px" }}
              >
                Optional: Let us know about any food allergies for meal planning
              </div>
            </div>

            <div style={{ marginTop: "24px" }}>
              <span
                onClick={handleSubmit}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "4px",
                  fontSize: "16px",
                }}
              >
                Submit Registration
              </span>
            </div>
          </form>
        </div>

        <div className="problems">
          <div className="problem-title">🚨 Form & Error Problems to Fix:</div>
          <ul>
            <li>
              <strong>Missing Labels:</strong> No proper label elements
              associated with inputs
            </li>
            <li>
              <strong>Poor Error Association:</strong> Error messages not
              connected with aria-describedby
            </li>
            <li>
              <strong>Missing aria-invalid:</strong> No indication to screen
              readers that fields have errors
            </li>
            <li>
              <strong>No Focus Management:</strong> Focus doesn't move to first
              invalid field on submission
            </li>
            <li>
              <strong>Poor Error Summary:</strong> Error summary not properly
              announced or linked
            </li>
            <li>
              <strong>Missing Required Indicators:</strong> No aria-required for
              mandatory fields
            </li>
            <li>
              <strong>Non-Semantic Buttons:</strong> Submit button is a span
              instead of proper button
            </li>
            <li>
              <strong>No Live Regions:</strong> Form status changes not
              announced to screen readers
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Make the form fully accessible by:</p>
          <ol>
            <li>
              Add proper <code>&lt;label&gt;</code> elements for each input
            </li>
            <li>
              Associate error messages using <code>aria-describedby</code>
            </li>
            <li>
              Add <code>aria-invalid="true"</code> to fields with errors
            </li>
            <li>Move focus to the first invalid field after submission</li>
            <li>Create an accessible error summary at the top of the form</li>
            <li>
              Add <code>aria-required="true"</code> to required fields
            </li>
            <li>Convert submit span to proper button element</li>
            <li>Add live region announcements for form status changes</li>
            <li>Ensure error messages are descriptive and actionable</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>Screen Reader:</strong> Use VoiceOver or NVDA - should
              announce labels, requirements, and errors
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Tab through form - should
              reach all interactive elements
            </li>
            <li>
              <strong>Error Testing:</strong> Submit with empty fields - focus
              should move to first error
            </li>
            <li>
              <strong>Error Announcements:</strong> Verify error messages are
              read by screen reader
            </li>
            <li>
              <strong>Form Completion:</strong> Fill out form correctly - should
              submit successfully
            </li>
            <li>
              <strong>Error Summary:</strong> Check that error count and list
              are announced
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 7 (Understandable):</strong> Clear labels and
              error messages
            </li>
            <li>
              <strong>WCAG 1.3.1:</strong> Info and Relationships - proper form
              structure
            </li>
            <li>
              <strong>WCAG 2.4.6:</strong> Headings and Labels - descriptive
              form labels
            </li>
            <li>
              <strong>WCAG 3.3.1:</strong> Error Identification - errors clearly
              identified
            </li>
            <li>
              <strong>WCAG 3.3.2:</strong> Labels or Instructions - clear input
              purposes
            </li>
            <li>
              <strong>WCAG 3.3.3:</strong> Error Suggestion - helpful error
              messages
            </li>
            <li>
              <strong>WCAG 4.1.2:</strong> Name, Role, Value - accessible form
              controls
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
