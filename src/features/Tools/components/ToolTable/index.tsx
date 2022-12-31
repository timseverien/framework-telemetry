import { Button } from '@components/Button/Button';
import { ListWithFallback } from '@components/ListWithFallback';
import { ScrollableTable } from '@components/ScrollableTable';
import { TELEMETRY_INFORMATION_TYPE_LABELS, TELEMETRY_TYPE_LABELS } from '@domain/telemetry';
import { getToolSlug, Tool } from '@domain/tool';
import { createClassName } from '@functions/className';
import { getHostname } from '@functions/url';
import styles from './styles.module.css';

export const ToolTable = ({ tools }: { tools: Tool[] }) => {
	const getToolUrl = (tool: Tool) => `/tools/${getToolSlug(tool)}`;

	const onToolClick = (tool: Tool) => {
		if (tool.telemetry.type === 'NONE') {
			return;
		}

		window.location.href = getToolUrl(tool);
	};

	return (
		<ScrollableTable>
			<caption>Tools and the data they collect</caption>
			<thead>
				<tr>
					<th scope="col">Tool</th>
					<th scope="col">Type</th>
					<th scope="col">Data that is collected</th>
					<td>&nbsp;</td>
				</tr>
			</thead>
			<tbody>
				{tools.map((tool) => (
					<tr
						key={tool.name}
						class={createClassName([tool.telemetry.type !== 'NONE' ? styles.rowClickable : null])}
						onClick={() => onToolClick(tool)}
					>
						<th scope="row" class={styles.cellTool}>
							<div class={styles.tool}>
								{tool.telemetry.type !== 'NONE' ? (
									<a href={getToolUrl(tool)}>{tool.name}</a>
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
						<td>{TELEMETRY_TYPE_LABELS[tool.telemetry.type]}</td>
						<td>
							{tool.telemetry.type !== 'NONE' ? (
								<ListWithFallback
									list={tool.telemetry.informationType.map((infoType) =>
										TELEMETRY_INFORMATION_TYPE_LABELS[infoType].toLowerCase()
									)}
									fallback="Unknown"
								/>
							) : (
								'-'
							)}
						</td>
						<td>
							{tool.telemetry.type !== 'NONE' && <Button href={getToolUrl(tool)}>Opt out</Button>}
						</td>
					</tr>
				))}
			</tbody>
		</ScrollableTable>
	);
};
