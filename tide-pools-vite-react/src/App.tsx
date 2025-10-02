import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import styles from "./styles/App.module.css";
import "./styles/exercises.css";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Exercise01 from "./exercises/Exercise01";
import Exercise02 from "./exercises/Exercise02";
import Exercise03 from "./exercises/Exercise03";
import Exercise04 from "./exercises/Exercise04";
import { FocusToH1 } from "./components/FocusToH1";

export default function App() {
  const location = useLocation();
  return (
    <div className={styles.layout}>
      <a href="#main" className="skipLink">
        Skip to content
      </a>
      <header>
        <div className="container">
          <h1 style={{ margin: 0 }}>Tide Pools</h1>
          <nav aria-label="Primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? styles.navActive : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                isActive ? styles.navActive : undefined
              }
            >
              Explore
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? styles.navActive : undefined
              }
            >
              About
            </NavLink>
            <details className={styles.exerciseDropdown}>
              <summary>Exercises</summary>
              <div className={styles.dropdownContent}>
                <NavLink
                  to="/exercise/01"
                  className={({ isActive }) =>
                    isActive ? styles.navActive : undefined
                  }
                >
                  1. Semantic HTML
                </NavLink>
                <NavLink
                  to="/exercise/02"
                  className={({ isActive }) =>
                    isActive ? styles.navActive : undefined
                  }
                >
                  2. Contrast & Focus
                </NavLink>
                <NavLink
                  to="/exercise/03"
                  className={({ isActive }) =>
                    isActive ? styles.navActive : undefined
                  }
                >
                  3. Keyboard Nav
                </NavLink>
                <NavLink
                  to="/exercise/04"
                  className={({ isActive }) =>
                    isActive ? styles.navActive : undefined
                  }
                >
                  4. Responsible ARIA
                </NavLink>
              </div>
            </details>
          </nav>
        </div>
      </header>

      <FocusToH1 />

      <main id="main" className={`${styles.main} container`}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercise/01" element={<Exercise01 />} />
          <Route path="/exercise/02" element={<Exercise02 />} />
          <Route path="/exercise/03" element={<Exercise03 />} />
          <Route path="/exercise/04" element={<Exercise04 />} />
        </Routes>
      </main>

      <footer>
        <div className="container">
          © {new Date().getFullYear()} Tide Pools
        </div>
      </footer>
    </div>
  );
}
