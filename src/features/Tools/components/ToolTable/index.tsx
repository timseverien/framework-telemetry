import { ListWithFallback } from '@components/ListWithFallback';
import { ScrollableTable } from '@components/ScrollableTable';
import { TELEMETRY_INFORMATION_TYPE_LABELS, TELEMETRY_TYPE_LABELS } from '@domain/telemetry';
import { getToolSlug, Tool } from '@domain/tool';
import { getHostname } from '@functions/url';
import styles from './styles.module.css';

export const ToolTable = ({ tools }: { tools: Tool[] }) => (
	<ScrollableTable>
		<caption>Tools and the data they collect</caption>
		<thead>
			<tr>
				<th scope="col">Tool</th>
				<th scope="col">Type</th>
				<th scope="col">Data that is collected</th>
				<th scope="col">Documentation</th>
			</tr>
		</thead>
		<tbody>
			{tools.map((tool) => (
				<tr key={tool.name}>
					<th scope="row" class={styles.cellTool}>
						<div class={styles.tool}>
							<a href={`/tools/${getToolSlug(tool)}`}>{tool.name}</a>
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
						{tool.telemetry.type === 'OPT_OUT' ? (
							<a href={tool.telemetry.resource} target="_blank">
								{getHostname(tool.telemetry.resource)}
							</a>
						) : (
							'-'
						)}
					</td>
				</tr>
			))}
		</tbody>
	</ScrollableTable>
);
