export const ListWithFallback = ({
	fallback,
	list,
	upperCaseFirstCharacter = false,
}: {
	fallback: string;
	list: string[];
	upperCaseFirstCharacter?: boolean;
}) => {
	const listFormatter = new Intl.ListFormat('en', {
		type: 'conjunction',
		style: 'narrow',
	});

	const content = list.length > 0 ? listFormatter.format(list) : fallback;
	const contentWithCasing = upperCaseFirstCharacter
		? content.substring(0, 1).toUpperCase() + content.substring(1)
		: content;

	return <>{contentWithCasing}</>;
};
