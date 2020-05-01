import { useEffect } from "react";

const themes = {
    light: {
        "--color-primary": "#282c34",
        "--color-background": "white"
    },
    dark: {
        "--color-primary": "white",
        "--color-background": "#282c34"
    }
};

export const useTheme = selectedTheme => {
    useEffect(() => {
        const theme = themes[selectedTheme] || themes.light;
        Object.keys(theme).forEach(key => {
            const value = theme[key];
            document.documentElement.style.setProperty(key, value);
        });
    }, [selectedTheme]);
};


//References:
//https://blogreact.com/add-themes-to-react-app/