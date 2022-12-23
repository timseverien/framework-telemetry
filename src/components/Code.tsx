import type { FunctionalComponent } from 'preact';

export const Code: FunctionalComponent = ({ children }) => {
	// prettier-ignore
	return <pre><code>{children}</code></pre>;
};
