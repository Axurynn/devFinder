import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [changeTheme, setChangeTheme] = useState('light');

	return (
		<ThemeContext.Provider value={{ changeTheme, setChangeTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
