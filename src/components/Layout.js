import React, { useContext} from "react";
import { ThemeContext, ThemePro, ThemeProvider
 } from "./Contexts/ThemeContext";


 function Layout({startingTheme, children}){
    return(
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    )
 }

const LayoutNoThemeProvider = ({ startingTheme, children }) => {
    const {theme} = useContext(ThemeContext)

    return (
            <div
                className={
                    theme === "light" ? "container-fluid light" : "container-fluid dark"
                }
            >
                {children}
            </div>
            )
}
export default Layout;