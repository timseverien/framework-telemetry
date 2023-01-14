import type { JSX } from 'preact/jsx-runtime';

export const InlineElementList = ({ items }: { items: JSX.Element[] }) => {
	const listFormatter = new Intl.ListFormat('en', {
		type: 'conjunction',
		style: 'long',
	});

	const itemsFake = items.map((item, index) => index.toString());
	const parts = listFormatter.formatToParts(itemsFake);

	return (
		<>
			{parts.map((part) =>
				part.type === 'element' ? items[Number.parseInt(part.value)] : part.value
			)}
		</>
	);
};
