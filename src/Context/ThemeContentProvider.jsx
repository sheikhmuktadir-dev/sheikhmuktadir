import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextPropvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const themeHander = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeHander }}>
      {children}
    </ThemeContext.Provider>
  );
}
