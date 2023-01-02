import styles from './styles.module.css';

export const Header = () => (
	<head>
		<nav>
			<ul class={styles.navigationList}>
				<li>
					<a href="/" class={styles.link}>
						Home
					</a>
				</li>
				<li>
					<a href="/tools" class={styles.link}>
						Which tools collect what?
					</a>
				</li>
			</ul>
		</nav>
	</head>
);
