import { createContext, useState } from "react"

const AllContext = createContext(); // createContext

function AllContextProvider({ children }) {
    const [isDark, setIsDark] = useState(false)
    function toggleTheme() {
        setIsDark(!isDark)
    }
    return (
        <AllContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </AllContext.Provider>
    )
}

export { AllContext, AllContextProvider }