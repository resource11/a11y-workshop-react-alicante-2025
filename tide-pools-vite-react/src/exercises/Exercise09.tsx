import { useState, useEffect } from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Exercise09() {
  useDocumentTitle("Exercise 9: Reduced Motion");
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  // Broken: No detection of prefers-reduced-motion
  useEffect(() => {
    // Should detect user's motion preference
    // Currently ignores system setting
  }, []);

  const slideImages = [
    {
      src: "🐠",
      alt: "Tropical fish swimming in coral reef",
      caption: "Coral Reef Ecosystem",
    },
    {
      src: "🐢",
      alt: "Sea turtle gliding through water",
      caption: "Marine Wildlife",
    },
    {
      src: "🦈",
      alt: "Shark patrolling ocean depths",
      caption: "Ocean Predators",
    },
    {
      src: "🐙",
      alt: "Octopus changing colors",
      caption: "Adaptive Creatures",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slideImages.length) % slideImages.length,
    );
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  // Broken animation styles - no reduced motion support
  const animationStyles = {
    fadeIn: {
      animation: "fadeIn 1s ease-in-out", // Should respect prefers-reduced-motion
    },
    slideTransition: {
      transform: `translateX(-${currentSlide * 100}%)`,
      transition: "transform 0.5s ease-in-out", // Should be disabled for reduced motion
    },
    bounce: {
      animation: "bounce 2s infinite", // Problematic - continuous animation
    },
    pulse: {
      animation: "pulse 1.5s infinite", // Another continuous animation
    },
    shake: {
      animation: "shake 0.5s ease-in-out", // Could be disorienting
    },
    rotate: {
      animation: "rotate 3s linear infinite", // Spinning animation
    },
  };

  return (
    <div>
      {/* Add CSS animations - broken because no reduced motion queries */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-30px,0); }
            70% { transform: translate3d(0,-15px,0); }
            90% { transform: translate3d(0,-4px,0); }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
            20%, 40%, 60%, 80% { transform: translateX(10px); }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          .parallax-container {
            height: 200px;
            overflow-x: hidden;
            overflow-y: auto;
            perspective: 1px;
          }
          
          .parallax-element {
            position: absolute;
            transform: translateZ(-1px) scale(2);
            background: linear-gradient(45deg, #007bff, #28a745);
            width: 100%;
            height: 300px;
          }
          
          .floating-element {
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(-50%) translateX(0px); }
            50% { transform: translateY(-50%) translateX(10px); }
          }
          
          /* Broken: Missing reduced motion queries */
          /*
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
          */
        `}
      </style>

      {/* Broken: Should be <header> but using div */}
      <div className="page-header" style={animationStyles.fadeIn}>
        <div className="big">Exercise 9: Reduced Motion</div>
        <p className="exercise-intro">
          Animations and motion effects must respect user preferences and
          provide alternatives for users who need reduced motion for
          accessibility or comfort.
        </p>

        {/* Broken: Non-semantic animation toggle */}
        <div style={{ marginTop: "20px" }}>
          <span
            onClick={toggleAnimations}
            style={{
              padding: "8px 16px",
              backgroundColor: animationsEnabled ? "#28a745" : "#6c757d",
              color: "white",
              cursor: "pointer",
              borderRadius: "4px",
              ...(animationsEnabled ? animationStyles.pulse : {}),
            }}
          >
            {animationsEnabled ? "🎬 Animations ON" : "⏸️ Animations OFF"}
          </span>
        </div>
      </div>

      {/* Broken: Should be <main> but using div */}
      <div className="exercise">
        <div className="broken-implementation">
          <div className="big" style={animationStyles.bounce}>
            🚨 Broken Animation Implementation
          </div>

          {/* Image carousel with problematic animations */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Image Carousel (Forced Animations):
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "500px",
                height: "300px",
                overflow: "hidden",
                borderRadius: "8px",
                border: "1px solid #ddd",
                backgroundColor: "#f8f9fa",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: `${slideImages.length * 100}%`,
                  height: "100%",
                  ...animationStyles.slideTransition,
                }}
              >
                {slideImages.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      width: `${100 / slideImages.length}%`,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: "64px",
                      textAlign: "center",
                    }}
                  >
                    <div>{image.src}</div>
                    <div
                      style={{
                        fontSize: "16px",
                        marginTop: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {image.caption}
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel controls */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10px",
                  transform: "translateY(-50%)",
                }}
              >
                <span
                  onClick={prevSlide}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "white",
                    cursor: "pointer",
                    borderRadius: "50%",
                    ...(animationsEnabled ? animationStyles.pulse : {}),
                  }}
                >
                  ←
                </span>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                }}
              >
                <span
                  onClick={nextSlide}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "white",
                    cursor: "pointer",
                    borderRadius: "50%",
                    ...(animationsEnabled ? animationStyles.pulse : {}),
                  }}
                >
                  →
                </span>
              </div>

              {/* Slide indicators */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {slideImages.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor:
                        index === currentSlide
                          ? "white"
                          : "rgba(255,255,255,0.5)",
                      cursor: "pointer",
                      ...(animationsEnabled && index === currentSlide
                        ? animationStyles.bounce
                        : {}),
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Problematic loading animation */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Loading Animation (No Motion Alternative):
            </div>

            <div style={{ marginBottom: "16px" }}>
              <span
                onClick={simulateLoading}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Start Data Loading
              </span>
            </div>

            {loading && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "16px",
                  backgroundColor: "#e3f2fd",
                  borderRadius: "4px",
                  border: "1px solid #2196f3",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    border: "3px solid #f3f3f3",
                    borderTop: "3px solid #2196f3",
                    borderRadius: "50%",
                    ...(animationsEnabled ? animationStyles.rotate : {}),
                  }}
                ></div>
                <span>Loading marine data...</span>
              </div>
            )}
          </div>

          {/* Parallax scrolling example - problematic for motion sensitivity */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Parallax Effect (Motion Sickness Risk):
            </div>

            <div
              className="parallax-container"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                position: "relative",
              }}
            >
              <div className="parallax-element"></div>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  padding: "20px",
                  margin: "20px",
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
                  Ocean Conservation Data
                </div>
                <p>
                  Scroll within this container to see problematic parallax
                  effect.
                </p>
                <p>
                  This type of motion can cause discomfort and should respect
                  motion preferences.
                </p>
                <div style={{ height: "100px" }}></div>
                <p>More content to enable scrolling...</p>
                <div style={{ height: "100px" }}></div>
                <p>
                  The background moves at different speed creating depth
                  illusion.
                </p>
              </div>
            </div>
          </div>

          {/* Auto-playing content */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Auto-Playing Elements:
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  textAlign: "center",
                  ...(animationsEnabled ? animationStyles.shake : {}),
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>🌊</div>
                <div>Wave Motion</div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  (Shaking animation)
                </div>
              </div>

              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  textAlign: "center",
                  ...(animationsEnabled ? animationStyles.pulse : {}),
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>💓</div>
                <div>Heartbeat</div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  (Pulsing animation)
                </div>
              </div>

              <div
                style={{
                  padding: "20px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  textAlign: "center",
                  ...(animationsEnabled ? animationStyles.rotate : {}),
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>🌀</div>
                <div>Ocean Current</div>
                <div style={{ fontSize: "12px", color: "#666" }}>
                  (Spinning animation)
                </div>
              </div>
            </div>
          </div>

          {/* Modal with problematic entrance animation */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontWeight: "bold", marginBottom: "16px" }}>
              Broken Modal Animation:
            </div>

            <span
              onClick={() => setShowModal(true)}
              style={{
                padding: "12px 24px",
                backgroundColor: "#28a745",
                color: "white",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Open Modal with Animation
            </span>

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
                  ...(animationsEnabled ? animationStyles.fadeIn : {}),
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
                    ...(animationsEnabled ? animationStyles.bounce : {}),
                  }}
                >
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      marginBottom: "16px",
                    }}
                  >
                    Marine Research Update
                  </div>
                  <p>
                    This modal uses problematic entrance animations that don't
                    respect reduced motion preferences. The bouncing effect
                    could be disorienting.
                  </p>
                  <div style={{ marginTop: "20px", textAlign: "right" }}>
                    <span
                      onClick={() => setShowModal(false)}
                      style={{
                        padding: "8px 16px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      Close
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Floating element - continuously animating */}
        <div
          className="floating-element"
          style={{
            padding: "12px",
            backgroundColor: "#ffc107",
            color: "#000",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          🐠
        </div>

        <div className="problems">
          <div className="problem-title">
            🚨 Reduced Motion Problems to Fix:
          </div>
          <ul>
            <li>
              <strong>No prefers-reduced-motion Detection:</strong> Ignores
              system accessibility settings
            </li>
            <li>
              <strong>Forced Animations:</strong> No way to disable motion for
              sensitive users
            </li>
            <li>
              <strong>Continuous Motion:</strong> Auto-playing animations that
              never stop
            </li>
            <li>
              <strong>Parallax Effects:</strong> Motion that can trigger
              vestibular disorders
            </li>
            <li>
              <strong>Excessive Transitions:</strong> Overly dramatic motion
              effects
            </li>
            <li>
              <strong>No Static Alternatives:</strong> No reduced-motion
              fallbacks provided
            </li>
            <li>
              <strong>Auto-Playing Content:</strong> Motion starts without user
              initiation
            </li>
            <li>
              <strong>Spinning Animations:</strong> Rotation effects that can
              cause disorientation
            </li>
          </ul>
        </div>

        <div className="assignment">
          <div className="assignment-title">🎯 Your Task:</div>
          <p>Make animations accessible by:</p>
          <ol>
            <li>
              Add <code>@media (prefers-reduced-motion: reduce)</code> CSS
              queries
            </li>
            <li>
              Replace animations with instant transitions or subtle fades for
              reduced motion
            </li>
            <li>
              Provide manual toggle to disable animations regardless of system
              setting
            </li>
            <li>Remove or modify continuous/infinite animations</li>
            <li>Replace parallax effects with static alternatives</li>
            <li>Ensure auto-playing content can be paused</li>
            <li>Test with reduced motion OS setting enabled</li>
            <li>Provide clear visual feedback without motion</li>
            <li>Add proper button elements for animation controls</li>
          </ol>
        </div>

        <div className="testing-instructions">
          <div className="testing-title">🧪 How to Test:</div>
          <ul>
            <li>
              <strong>System Setting:</strong> Enable "Reduce motion" in OS
              accessibility settings
            </li>
            <li>
              <strong>Manual Toggle:</strong> Use in-page animation toggle -
              should override system setting
            </li>
            <li>
              <strong>Animation Audit:</strong> Verify no motion occurs when
              reduced motion is enabled
            </li>
            <li>
              <strong>Functionality Test:</strong> Ensure all features work
              without animations
            </li>
            <li>
              <strong>Screen Reader:</strong> Test that animation controls are
              properly announced
            </li>
            <li>
              <strong>Performance:</strong> Check that removing animations
              improves performance
            </li>
          </ul>
        </div>

        <div className="eaa-info">
          <div className="eaa-title">📋 EAA Compliance:</div>
          <ul>
            <li>
              <strong>Article 5 (Perceivable):</strong> Content doesn't cause
              seizures or vestibular disorders
            </li>
            <li>
              <strong>Article 8 (Adaptable):</strong> Respect user motion
              preferences
            </li>
            <li>
              <strong>WCAG 2.2.2:</strong> Pause, Stop, Hide - control over
              moving content
            </li>
            <li>
              <strong>WCAG 2.3.3:</strong> Animation from Interactions - motion
              triggered by interaction can be disabled
            </li>
            <li>
              <strong>WCAG 1.4.2:</strong> Audio Control - applies to motion as
              well
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
