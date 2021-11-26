import React, {ReactNode, useState} from 'react';

interface Props {
    children: ReactNode;
}

export interface ThemeContextState {
    darkTheme: boolean;
    toggleTheme: (value: boolean) => void;
}

const Theme = React.createContext<Partial<ThemeContextState>>({});

const ThemeContext = function ({ children }: Props)
{
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') === 'dark');

    const toggleTheme = (value: boolean) => {
        setDarkTheme(value);
    }

    return (
            <Theme.Provider value={{ darkTheme, toggleTheme }}>
                {children}
            </Theme.Provider>
        )
}
export {ThemeContext, Theme};