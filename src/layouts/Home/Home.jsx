import { useState, useEffect } from 'react';
import s from './Home.module.scss';
import Company from '../../assets/svg/icon-company.svg?component';
import Location from '../../assets/svg/icon-location.svg?component';
import Search from '../../assets/svg/icon-search.svg?component';
import Twitter from '../../assets/svg/icon-twitter.svg?component';
import Website from '../../assets/svg/icon-website.svg?component';

const Home = () => {
	const [value, setValue] = useState('octocat');
	const [user, setUser] = useState({});

	useEffect(() => {
		handleSubmit();
	}, []);

	const handleSubmit = async () => {
		try {
			const res = await fetch(`https://api.github.com/users/${value}`);
			const data = await res.json();
			setUser(data);
			setValue('');
		} catch (err) {
			console.log(err);
		}
	};

	const networks = [
		{
			name: 'location',
			Icon: Location,
		},
		{
			name: 'blog',
			Icon: Website,
		},
		{
			name: 'twitter_username',
			Icon: Twitter,
		},
		{
			name: 'company',
			Icon: Company,
		},
	];

	return (
		<main className={s.home}>
			<form
				className={s.inputContainer}
				onSubmit={e => {
					e.preventDefault();
					handleSubmit();
				}}
			>
				<span className={s.searchIcon}>
					<Search />
				</span>
				<input
					type='text'
					placeholder='Search GitHub username...'
					className={s.input}
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button type='submit' className={s.button}>
					Search
				</button>
			</form>
			{user.message ? (
				<div className={s.card}>
					<div className={s.profile}>
						<img className={s.avatar} src={user?.avatar_url} alt='' />
						<div className={s.userInfos}>
							<h1 className={s.name}>User not found</h1>
						</div>
					</div>
					<p className={s.userBio}>'This profile has no bio'</p>
					<div className={s.accountDetails}>
						<p className={s.info}>
							repos <span>?</span>
						</p>
						<p className={s.info}>
							followers <span>?</span>
						</p>
						<p className={s.info}>
							following <span>?</span>
						</p>
					</div>
					<div className={s.networks}>
						{networks.map(({ name, Icon }, i) => {
							return (
								<p
									key={i}
									className={`${s.network} ${
										!user[name] ? s.notAvailable : null
									}`}
								>
									<span className={s.networkIcon}>
										<Icon />
									</span>
									{user[name] ? user[name] : 'Not Available'}
								</p>
							);
						})}
					</div>
				</div>
			) : (
				<div className={s.card}>
					<div className={s.profile}>
						<img className={s.avatar} src={user?.avatar_url} alt='' />
						<div className={s.userInfos}>
							<h1 className={s.name}>{user?.name}</h1>
							<a className={s.login} href={`https://github.com/${user?.login}`}>
								@{user?.login}
							</a>
							<p className={s.text}>
								Joined{' '}
								{new Date(user?.created_at)
									.toLocaleDateString('fr', {
										day: 'numeric',
										month: 'short',
										year: 'numeric',
									})
									.split('v.')
									.join('')}
							</p>
						</div>
					</div>
					<p className={`${s.userBio} ${!user.bio ? s.notAvailable : null}`}>
						{user?.bio === null ? 'This profile has no bio' : user?.bio}
					</p>
					<div className={s.accountDetails}>
						<p className={s.info}>
							repos <span>{user?.public_repos}</span>
						</p>
						<p className={s.info}>
							followers <span>{user?.followers}</span>
						</p>
						<p className={s.info}>
							following <span>{user?.following}</span>
						</p>
					</div>
					<div className={s.networks}>
						{networks.map(({ name, Icon }, i) => {
							return (
								<p
									key={i}
									className={`${s.network} ${
										!user[name] ? s.notAvailable : null
									}`}
								>
									<span className={s.networkIcon}>
										<Icon />
									</span>
									{user[name] ? user[name] : 'Not Available'}
								</p>
							);
						})}
					</div>
				</div>
			)}
		</main>
	);
};

export default Home;
