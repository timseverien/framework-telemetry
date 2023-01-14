export const TextList = ({
	items,
	upperCaseFirstCharacter = false,
}: {
	items: string[];
	upperCaseFirstCharacter?: boolean;
}) => {
	const listFormatter = new Intl.ListFormat('en', {
		type: 'conjunction',
		style: 'narrow',
	});

	return (
		<>
			{listFormatter.format(
				upperCaseFirstCharacter
					? items.map((i) => i.substring(0, 1).toLocaleUpperCase() + i.substring(1))
					: items
			)}
		</>
	);
};
