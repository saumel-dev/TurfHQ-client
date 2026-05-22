'use client'
import { ThemeProvider } from "next-themes";
const NextThemeProvider = ({ children }) => {
    return (
        <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem={true}>
            {children}
        </ThemeProvider>
    );
};

export default NextThemeProvider;