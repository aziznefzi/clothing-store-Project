import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [WebsiteTheme, setWebsiteTheme] = useState(localStorage.getItem('WebsiteTheme') || "dark");
    return (
        <ThemeContext.Provider value={{ WebsiteTheme, setWebsiteTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;