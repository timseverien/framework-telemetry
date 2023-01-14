import { getToolSlug, Tool } from '@domain/tool';
import { InlineElementList } from './InlineElementList';

export const InlineToolList = ({ items }: { items: Tool[] }) => (
	<InlineElementList
		items={items.map((tool) => (
			<a href={`/tools/${getToolSlug(tool)}`}>{tool.name}</a>
		))}
	/>
);
