import { CardWithLink } from '@components/Card';
import { Flow } from '@components/Flow';
import { ListWithFallback } from '@components/ListWithFallback';
import type { HeadingLevel } from '@components/props';
import { TELEMETRY_INFORMATION_TYPE_LABELS } from '@domain/telemetry';
import { getToolSlug, Tool } from '@domain/tool';
import type { JSX } from 'preact/jsx-runtime';

export const ToolSummaryCard = ({ headingLevel = 2, tool }: HeadingLevel & { tool: Tool }) => {
	if (tool.telemetry.type !== 'OPT_OUT') {
		return;
	}

	const informationTypeLabelList = tool.telemetry.informationType.map((it) =>
		TELEMETRY_INFORMATION_TYPE_LABELS[it].toLowerCase()
	);

	const Heading = `h${headingLevel}` as keyof JSX.IntrinsicElements;

	return (
		<CardWithLink to={`/tools/${getToolSlug(tool)}`}>
			<Flow>
				<Heading>{tool.name}</Heading>
				<p>
					Collects: <ListWithFallback list={informationTypeLabelList} fallback="unknown" />.
				</p>
			</Flow>
		</CardWithLink>
	);
};
