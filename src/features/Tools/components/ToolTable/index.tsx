import styles from './styles.module.css';
import { ListWithFallback } from '@components/ListWithFallback';
import { ScrollableTable } from '@components/ScrollableTable';
import { VisuallyHidden } from '@components/VisuallyHidden';
import { TELEMETRY_INFORMATION_TYPE_LABELS, TELEMETRY_TYPE_LABELS } from '@domain/telemetry';
import { getToolSlug, Tool } from '@domain/tool';

export const ToolTable = ({ tools }: { tools: Tool[] }) => {
	const getResourceHostname = (resource: string) => {
		try {
			const hostname = new URL(resource).hostname;
			return hostname.startsWith('www.') ? hostname.substring(4) : hostname;
		} catch (error) {
			return resource;
		}
	};

	return (
		<ScrollableTable>
			<caption>Telemetry in front-end frameworks and static-site generators</caption>
			<thead>
				<tr>
					<th scope="col">Tool</th>
					<th scope="col">Type</th>
					<th scope="col">Information</th>
					<th scope="col">Documentation</th>
				</tr>
			</thead>
			<tbody>
				{tools.map((tool) => (
					<tr key={tool.name}>
						<th scope="row" class={styles.cellTool}>
							<div class={styles.tool}>
								<a href={`/tools/${getToolSlug(tool)}`}>{tool.name}</a>
								<span>
									<a href={tool.website} target="_blank">
										<VisuallyHidden>{getResourceHostname(tool.website)}</VisuallyHidden>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											height="16"
											width="16"
											viewBox="0 0 48 48"
										>
											<path
												fill="currentColor"
												d="M24 44q-4.15 0-7.8-1.575-3.65-1.575-6.35-4.275-2.7-2.7-4.275-6.35Q4 28.15 4 24t1.575-7.8Q7.15 12.55 9.85 9.85q2.7-2.7 6.35-4.275Q19.85 4 24 4t7.8 1.575q3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24t-1.575 7.8q-1.575 3.65-4.275 6.35-2.7 2.7-6.35 4.275Q28.15 44 24 44Zm-2.15-3.05v-4.1q-1.75 0-2.95-1.3-1.2-1.3-1.2-3.05v-2.2L7.45 20.05q-.25 1-.35 1.975Q7 23 7 24q0 6.5 4.225 11.35t10.625 5.6Zm14.7-5.4q1.1-1.2 1.925-2.55.825-1.35 1.4-2.825t.85-3.025Q41 25.6 41 24q0-5.3-2.9-9.625T30.35 8.05v.9q0 1.75-1.2 3.05-1.2 1.3-2.95 1.3h-4.35v4.35q0 .85-.675 1.4-.675.55-1.525.55H15.5V24h12.9q.85 0 1.4.65.55.65.55 1.5v6.35h2.15q1.45 0 2.55.85 1.1.85 1.5 2.2Z"
											/>
										</svg>
									</a>
								</span>
							</div>
						</th>
						<td>{TELEMETRY_TYPE_LABELS[tool.telemetry.type]}</td>
						<td>
							{tool.telemetry.type !== 'NONE' ? (
								<ListWithFallback
									list={tool.telemetry.informationType.map(
										(infoType) => TELEMETRY_INFORMATION_TYPE_LABELS[infoType]
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
									{getResourceHostname(tool.telemetry.resource)}
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
};
