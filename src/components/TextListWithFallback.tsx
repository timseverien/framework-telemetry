import { TextList } from './TextList';

export const TextListWithFallback = ({
	fallback,
	items,
	upperCaseFirstCharacter = false,
}: {
	fallback: string;
	items: string[];
	upperCaseFirstCharacter?: boolean;
}) => {
	return items.length > 0 ? (
		<TextList items={items} upperCaseFirstCharacter={upperCaseFirstCharacter} />
	) : (
		<>{fallback}</>
	);
};
