import styles from './styles.module.css';
import type { FunctionalComponent, JSX } from 'preact';

type ButtonVariant = 'primary' | 'ghost';

export const Button: FunctionalComponent<
	JSX.IntrinsicAttributes & { href?: string; variant?: ButtonVariant }
> = ({ children, href, variant = 'primary', ...props }) => {
	const Component = href ? 'a' : 'button';

	return (
		<Component {...props} class={`${styles.button} ${styles[`button--${variant}`]}`} href={href}>
			{children}
		</Component>
	);
};
