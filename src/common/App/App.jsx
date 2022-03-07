import { useEffect } from 'react';
import s from './App.module.scss';

import { keepTheme } from '../../utils/theme';
import { ThemeProvider } from '../../context/themeContext';
import Home from '../../layouts/Home/Home';
import Header from '../../layouts/Header/Header';

function App() {
	useEffect(() => {
		keepTheme();
	}, []);

	return (
		<div className={s.app}>
			<ThemeProvider>
				<Header />
				<Home />
			</ThemeProvider>
		</div>
	);
}

export default App;
