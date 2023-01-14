import { createClassName } from '@functions/className';
import type { FunctionalComponent } from 'preact';
import styles from './styles.module.css';

export const Notification: FunctionalComponent<{ variant?: 'info' | 'warn' }> = ({
	children,
	variant = 'info',
}) => (
	<div
		class={createClassName([
			styles.notification,
			variant === 'warn' ? styles.notificationWarn : null,
		])}
	>
		{children}
	</div>
);
