import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import "./toggleTheme.scss";

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
    <div className="toggle-switch" onClick={toggleTheme}>
      <div className={`slider ${theme === "dark" ? "dark" : "light"}`}>
        <div className="icon">
          {theme === "dark" ? (
            <FaMoon size={15} color="#A2AAB0" />
          ) : (
            <BsFillSunFill size={15} color="#FDB813" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleTheme;
