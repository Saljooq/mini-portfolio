import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import icon from '../../assets/icons/android-chrome-192x192.png'

const Header = () => (
	<header class={style.header}>
		<nav class={style.navbar}>
			<div class={style.logo}>
				<img src={icon} />
				<h1>Mini-Portfolio App</h1>
			</div>
			<div class={style.links}>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/test">Test</Link>
				<Link activeClassName={style.active} href="/profile">Me</Link>
				<Link activeClassName={style.active} href="/profile/john">John</Link>
				<Link activeClassName={style.active} href="/md">MD</Link>
			</div>
		</nav>
	</header>
);

export default Header;
