import { useMemo, useState } from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Achievements from "./components/Achievements.jsx";
import Skills from "./components/Skills.jsx";
import Links from "./components/Links.jsx";
import Contact from "./components/Contact.jsx";

const navLinks = [
  { label: "About", href: "#about", icon: "◎" },
  { label: "Education", href: "#education", icon: "🎓" },
  { label: "Experience", href: "#experience", icon: "💼" },
  { label: "Achievements", href: "#achievements", icon: "🏆" },
  { label: "Skills", href: "#skills", icon: "🧩" },
  { label: "Profiles", href: "#profiles", icon: "🔗" },
  { label: "Contact", href: "#contact", icon: "✉️" },
];

export default function App() {
  const [mode, setMode] = useState("light");
  const themeLabel = useMemo(
    () => (mode === "light" ? "Light Mode" : "Dark Mode"),
    [mode]
  );

  return (
    <div className="app" data-theme={mode}>
      <Hero
        navLinks={navLinks}
        mode={mode}
        themeLabel={themeLabel}
        onToggleMode={() =>
          setMode((prev) => (prev === "light" ? "dark" : "light"))
        }
      />
      <main className="main-content">
        <About />
        <Education />
        <Experience />
        <Achievements />
        <Skills />
        <Links />
        <Contact />
      </main>
    </div>
  );
}
