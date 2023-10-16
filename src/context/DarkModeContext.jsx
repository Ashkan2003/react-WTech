/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// this is a contextApi

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark"); // this is the tailwindCss darkmode functionality => when the html-tag(head html tag) have the class of "dark the "dark:"-variaty of the tailwindCss classes will activated
      } else {
        document.documentElement.classList.remove("dark"); //when we remove the "dark" class from the head html-tag the "dark:"-variaty of the tailwindCss classes will dectivated
      }
    },
    [isDarkMode]
  );

  function toogleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toogleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of the DarkModeProvider");

  return context;
}

export { DarkModeProvider, useDarkMode };
