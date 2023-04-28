import React, { useEffect, useState } from "react";
import styles from "@/styles/DarkMode.module.css";
const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setIsDark(true);
    localStorage.setItem("selected_theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setIsDark(false);
    localStorage.setItem("selected_theme", "light");
  };
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const selected_theme = localStorage.getItem("selected_theme");
    if (selected_theme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <div className={styles.dark_mode}>
      <input
        className={styles.dark_mode_input}
        type="checkbox"
        id="darkmode-toggle"
        checked={isDark}
        onChange={(e) => {
          toggleTheme(e);
        }}
      />
      <label
        className={styles.dark_mode_label}
        htmlFor="darkmode-toggle"
      ></label>
    </div>
  );
};

export default DarkMode;
