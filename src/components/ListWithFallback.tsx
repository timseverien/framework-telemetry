export const ListWithFallback = ({ fallback, list }: { fallback: string; list: string[] }) => {
	const listFormatter = new Intl.ListFormat('en', {
		type: 'conjunction',
		style: 'narrow',
	});

	return <>{list.length > 0 ? listFormatter.format(list) : fallback}</>;
};
