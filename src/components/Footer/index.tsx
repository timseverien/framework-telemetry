import site from '../../site.json';
import styles from './styles.module.css';

export const Footer = () => (
	<footer class={styles.footer}>
		<div class={styles.author}>
			<span>Made with ❤️ by Tim Severien</span>
			<a href={site.author.social.mastodon.url} target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 216.4 232" class={styles.icon}>
					<title>Mastodon</title>
					<path
						fill="currentColor"
						d="M211.8 139c-3.2 16.5-28.5 34.4-57.6 37.8-15.1 1.8-30 3.5-46 2.8-26-1.2-46.5-6.2-46.5-6.2 0 2.5.1 5 .4 7.2 3.4 25.7 25.5 27.2 46.4 28 21.2.6 40-5.3 40-5.3l.8 19s-14.7 8-41 9.5c-14.6.8-32.6-.4-53.6-6C9.2 213.9 1.4 165.4.2 116.2-.2 101.5.1 87.7.1 76c0-50.3 33-65 33-65C49.6 3.5 78.1.2 107.8 0h.7c29.7.2 58.2 3.5 74.8 11 0 0 33 14.8 33 65.2 0 0 .4 37.1-4.6 62.9"
					></path>
					<path
						fill="#1a2535"
						d="M177.5 80v61h-24.1V82c0-12.5-5.3-18.8-15.8-18.8-11.6 0-17.4 7.5-17.4 22.3v32.4h-24V85.4c0-14.8-5.8-22.3-17.4-22.3C68.3 63 63 69.4 63 81.9V141H39V80c0-12.4 3.2-22.3 9.5-29.6 6.6-7.3 15.2-11 25.9-11 12.4 0 21.7 4.7 27.9 14.2l6 10 6-10a31.1 31.1 0 0 1 28-14.3c10.6 0 19.2 3.8 25.8 11.1a43.7 43.7 0 0 1 9.5 29.7"
					></path>
				</svg>
			</a>
		</div>
		<div>
			<a href="/disclaimer">Disclaimer</a>
		</div>
	</footer>
);
