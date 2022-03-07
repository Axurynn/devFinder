export function setTheme(themeName) {
	localStorage.setItem('devFinder-theme', themeName);
	document.documentElement.className = themeName;
}

export function keepTheme() {
	if (localStorage.getItem('devFinder-theme')) {
		localStorage.getItem('devFinder-theme') === 'theme-light'
			? setTheme('theme-light')
			: setTheme('theme-dark');
	} else {
		setTheme('theme-light');
	}
}
