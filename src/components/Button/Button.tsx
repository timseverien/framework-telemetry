import { createClassName } from '@functions/className';
import type { FunctionalComponent, JSX } from 'preact';
import styles from './styles.module.css';

type ButtonVariant = 'ghost' | 'primary' | 'secondary';

export const Button: FunctionalComponent<
	JSX.IntrinsicAttributes & {
		href?: string;
		variant?: ButtonVariant;
		onClick?: (event: MouseEvent) => any;
	}
> = ({ children, href, variant = 'primary', onClick, ...props }) => {
	const Component = href ? 'a' : 'button';

	return (
		<Component
			{...props}
			onClick={onClick}
			class={createClassName([styles.button, styles[`button--${variant}`]])}
			href={href}
		>
			{children}
		</Component>
	);
};
