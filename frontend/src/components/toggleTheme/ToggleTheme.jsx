// ThemeToggle.jsx
import { useEffect, useState } from "react";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "var(--btn-bg)",
        color: "white",
      }}
    >
      {theme === "light" ? "🌙 Dark " : "☀️ Light "}
    </button>
  );
}

export default ToggleTheme;
