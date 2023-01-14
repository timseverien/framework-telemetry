import { Button } from '@components/Button/Button';
import { Score } from '@components/Score';
import { ScrollableTable } from '@components/ScrollableTable';
import { TextListWithFallback } from '@components/TextListWithFallback';
import { TELEMETRY_INFORMATION_TYPE_LABELS, TELEMETRY_TYPE_LABELS } from '@domain/telemetry';
import { getToolSlug, Tool } from '@domain/tool';
import { createClassName } from '@functions/className';
import { getTelemetryScore } from '@functions/telemetry';
import { getHostname } from '@functions/url';
import { createRef } from 'preact';
import styles from './styles.module.css';

const ToolRow = ({ tool }: { tool: Tool }) => {
	const link = createRef();
	const getToolUrl = (tool: Tool) => `/tools/${getToolSlug(tool)}`;

	return (
		<tr
			key={tool.name}
			class={createClassName([tool.telemetry.type !== 'NONE' ? styles.rowClickable : null])}
			onClick={(event) => {
				const eventNew = new MouseEvent('click', {
					bubbles: false,
					altKey: event.altKey,
					ctrlKey: event.ctrlKey,
					metaKey: event.metaKey,
					shiftKey: event.shiftKey,
				});

				link.current.dispatchEvent(eventNew);
			}}
		>
			<th scope="row" class={styles.cellTool}>
				<div class={styles.tool}>
					{tool.telemetry.type !== 'NONE' ? (
						<a href={getToolUrl(tool)} ref={link}>
							{tool.name}
						</a>
					) : (
						<b>{tool.name}</b>
					)}
				</div>
				<div class={styles.toolWebsite}>
					<a href={tool.website} target="_blank">
						{getHostname(tool.website)}
					</a>
				</div>
			</th>
			<td class={styles.cellScore}>
				<Score value={getTelemetryScore(tool.telemetry)} />
			</td>
			<td>{TELEMETRY_TYPE_LABELS[tool.telemetry.type]}</td>
			<td>
				{tool.telemetry.type !== 'NONE' ? (
					<TextListWithFallback
						items={tool.telemetry.informationType.map((infoType) =>
							TELEMETRY_INFORMATION_TYPE_LABELS[infoType].toLowerCase()
						)}
						fallback="Unknown"
					/>
				) : (
					'-'
				)}
			</td>
			<td>
				{tool.telemetry.type !== 'NONE' && (
					<Button href={getToolUrl(tool)} onClick={(event) => event.stopPropagation()}>
						Opt out
					</Button>
				)}
			</td>
		</tr>
	);
};

export const ToolTable = ({ tools }: { tools: Tool[] }) => {
	return (
		<ScrollableTable>
			<caption>Tools and the data they collect</caption>
			<thead>
				<tr>
					<th scope="col">Tool</th>
					<th scope="col">Score</th>
					<th scope="col">Type</th>
					<th scope="col">Data that is collected</th>
					<td>&nbsp;</td>
				</tr>
			</thead>
			<tbody>
				{tools.map((tool) => (
					<ToolRow tool={tool} />
				))}
			</tbody>
		</ScrollableTable>
	);
};
