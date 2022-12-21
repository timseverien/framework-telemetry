import styles from './styles.module.css';
import type { FunctionalComponent } from 'preact';

export const ScrollableTable: FunctionalComponent = ({ children }) => {
	return (
		<div class={styles.container}>
			<table class={styles.table}>{children}</table>
		</div>
	);
};
