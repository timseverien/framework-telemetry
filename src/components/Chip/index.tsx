import styles from './styles.module.css';
import { createClassName } from '@functions/className';
import type { FunctionalComponent } from 'preact';

export const SelectableChip: FunctionalComponent<{ active: boolean; onClick: () => any }> = ({
	children,
	active,
	onClick,
}) => (
	<button
		type="button"
		class={createClassName([styles.chip, active ? styles.chipActive : null])}
		onClick={onClick}
	>
		{children}
	</button>
);

export const ChipList: FunctionalComponent = ({ children }) => (
	<div class={styles.chipList}>{children}</div>
);
