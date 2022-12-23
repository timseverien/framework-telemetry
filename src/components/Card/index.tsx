import styles from './styles.module.css';
import type { FunctionalComponent } from 'preact';

export const Card: FunctionalComponent = ({ children }) => (
	<div class={styles.card}>{children}</div>
);

export const CardList: FunctionalComponent = ({ children }) => (
	<div class={styles.cardList}>{children}</div>
);

export const CardWithLink: FunctionalComponent<{ to: string }> = ({ children, to }) => (
	<a class={`${styles.card} ${styles.cardWithLink}`} href={to}>
		<div>{children}</div>
	</a>
);
