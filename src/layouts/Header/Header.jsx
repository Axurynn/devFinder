import s from './Header.module.scss';

import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';

const Header = () => {
	return (
		<header className={s.headerContainer}>
			<h1 className={s.headerTitle}>devFinder</h1>
			<SwitchTheme />
		</header>
	);
};

export default Header;
