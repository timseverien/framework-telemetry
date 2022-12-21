import { ListWithFallback } from '../../../../components/ListWithFallback';
import { ScrollableTable } from '../../../../components/ScrollableTable';
import { VisuallyHidden } from '../../../../components/VisuallyHidden';
import {
	type TelemetryInformation,
	TELEMETRY_TYPE_LABELS,
	TELEMETRY_INFORMATION_TYPE_LABELS,
} from '../../telemetry';
import styles from './styles.module.css';

export const TelemetryTable = ({ telemetryList }: { telemetryList: TelemetryInformation[] }) => {
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
				{telemetryList.map((ti) => (
					<tr key={ti.name}>
						<th scope="row" class={styles.cellTool}>
							<div class={styles.tool}>
								<span>{ti.name}</span>
								<span>
									<a href={ti.website} target="_blank">
										<VisuallyHidden>{getResourceHostname(ti.website)}</VisuallyHidden>
										<img src="/icons/globe.svg" alt="" aria-hidden="true" height="16" />
									</a>
								</span>
							</div>
						</th>
						<td>{TELEMETRY_TYPE_LABELS[ti.type]}</td>
						<td>
							{ti.type !== 'NONE' ? (
								<ListWithFallback
									list={ti.informationType.map(
										(infoType) => TELEMETRY_INFORMATION_TYPE_LABELS[infoType]
									)}
									fallback="Unknown"
								/>
							) : (
								'-'
							)}
						</td>
						<td>
							{ti.resource ? (
								<a href={ti.resource} target="_blank">
									{getResourceHostname(ti.resource)}
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
