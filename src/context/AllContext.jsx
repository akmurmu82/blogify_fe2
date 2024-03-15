import { createContext, useState } from "react";

const AllContext = createContext(); // createContext

function AllContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function toggleAuth() {
    setIsLoggedIn(!isLoggedIn);
  }
  function toggleTheme() {
    setIsDark(!isDark);
  }
  return (
    <AllContext.Provider
      value={{ isDark, toggleTheme, isLoggedIn, toggleAuth }}
    >
      {children}
    </AllContext.Provider>
  );
}

export { AllContext, AllContextProvider };
