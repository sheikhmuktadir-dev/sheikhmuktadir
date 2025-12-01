import { ThemeContext } from "./Context/ThemeContext";
import { useContext } from "react";

export default function Theme() {
  const { theme, themeHander } = useContext(ThemeContext);

  return (
    <div className="theme">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light"}
          onChange={themeHander}
        />
        <span className="slider" />
      </label>
    </div>
  );
}
