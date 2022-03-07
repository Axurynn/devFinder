import { useEffect, useState, useContext } from 'react';
import s from './SwitchTheme.module.scss';

import { setTheme } from '../../utils/theme';
import { ThemeContext } from '../../context/themeContext';

import Sun from '../../assets/svg/icon-sun.svg?component';
import Moon from '../../assets/svg/icon-moon.svg?component';

function SwitchTheme() {
	const [_, setTogClass] = useState('dark');
	let theme = localStorage.getItem('devFinder-theme');
	const { changeTheme, setChangeTheme } = useContext(ThemeContext);

	const handleOnClick = () => {
		if (localStorage.getItem('devFinder-theme') === 'theme-dark') {
			setTheme('theme-light');
			setTogClass('light');
		} else {
			setTheme('theme-dark');
			setTogClass('dark');
		}
	};

	useEffect(() => {
		if (localStorage.getItem('devFinder-theme') === 'theme-dark') {
			setTogClass('dark');
			setChangeTheme(true);
		} else {
			setTogClass('light');
			setChangeTheme(false);
		}
	}, [theme]);

	return (
		<div className={s.container}>
			<span onClick={handleOnClick} className={s.switchTheme}>
				{localStorage.getItem('devFinder-theme') === 'theme-dark'
					? 'Light'
					: 'Dark'}
			</span>
			{localStorage.getItem('devFinder-theme') === 'theme-dark' ? (
				<Sun className={s.icon} onClick={handleOnClick} />
			) : (
				<Moon className={s.icon} onClick={handleOnClick} />
			)}
		</div>
	);
}

export default SwitchTheme;
