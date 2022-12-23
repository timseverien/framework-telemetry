import type { FunctionalComponent, JSX } from 'preact';

export const Flow: FunctionalComponent<{ element?: keyof JSX.IntrinsicElements }> = ({
	children,
	element: Element = 'div',
}) => <Element class="flow">{children}</Element>;
