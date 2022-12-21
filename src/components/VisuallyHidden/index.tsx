import styles from './styles.module.css';
import type { FunctionalComponent } from 'preact';

export const VisuallyHidden: FunctionalComponent = ({ children }) => (
	<span class={styles.visuallyHidden}>{children}</span>
);
