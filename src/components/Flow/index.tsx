import { createClassName } from '@functions/className';
import type { FunctionalComponent, JSX } from 'preact';
import styles from './styles.module.css';

export const Flow: FunctionalComponent<{
	class?: string;
	element?: keyof JSX.IntrinsicElements;
	size?: number;
}> = ({ children, class: className = null, element: Element = 'div', size = 1 }) => (
	<Element class={createClassName([styles.flow, styles[`flow${size}x`], className])}>
		{children}
	</Element>
);
