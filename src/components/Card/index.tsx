import styles from './styles.module.css';
import type { FunctionalComponent } from 'preact';

export const Card: FunctionalComponent = ({ children }) => (
	<div class={styles.card}>{children}</div>
);
