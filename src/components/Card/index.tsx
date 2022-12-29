import styles from './styles.module.css';
import { createClassName } from '@functions/className';
import type { FunctionalComponent } from 'preact';

export const Card: FunctionalComponent = ({ children }) => (
	<div class={styles.card}>{children}</div>
);

export const CardList: FunctionalComponent = ({ children }) => (
	<div class={styles.cardList}>{children}</div>
);

export const CardWithLink: FunctionalComponent<{ to: string }> = ({ children, to }) => (
	<a class={createClassName([styles.card, styles.cardWithLink])} href={to}>
		<div>{children}</div>
	</a>
);
