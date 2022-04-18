import '../styles/DarkMode.css';
import { type ReactElement, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const DarkMode = (): ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(() => defaultDark);
  const onChange = (changedValue: boolean) => {
    if (changedValue) {
      setDark();
    } else {
      setLight();
    }
    setIsDarkMode(changedValue);
  }
  return (
    <DarkModeToggle
      onChange={onChange}
      checked={isDarkMode}
      size={80}
    />
  );
};

export default DarkMode;