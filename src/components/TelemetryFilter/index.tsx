import { TELEMETRY_TYPE_LABELS } from '../../data/telemetry';
import type { TelemetryType } from '../../domain/telemetry';
import { ChipList, SelectableChip } from '../Chip';
import styles from './styles.module.css';

export type TelemetryFilterOptions = {
	searchQuery: string | null;
	selectedTypes: TelemetryType[];
};

export const TelemetryFilter = ({
	options,
	setOptions,
}: {
	options: TelemetryFilterOptions;
	setOptions: (options: TelemetryFilterOptions) => any;
}) => {
	return (
		<div class={styles.filterList}>
			<div class={styles.filter}>
				<div class={styles.filterLabel}>Tracking type</div>
				<ChipList>
					{Object.entries(TELEMETRY_TYPE_LABELS).map(([type, label]) => {
						const isActive = options.selectedTypes.includes(type as TelemetryType);
						return (
							<SelectableChip
								active={isActive}
								onClick={() => {
									setOptions({
										...options,
										selectedTypes: isActive
											? options.selectedTypes.filter((t) => t !== type)
											: [...options.selectedTypes, type as TelemetryType],
									});
								}}
							>
								{label}
							</SelectableChip>
						);
					})}
				</ChipList>
			</div>

			<div class={styles.filter}>
				<label class={styles.filterLabel}>Search tool</label>
				<input
					type="search"
					value={options.searchQuery || ''}
					onInput={(ev) =>
						setOptions({
							...options,
							searchQuery: ev.currentTarget.value,
						})
					}
				/>
			</div>
		</div>
	);
};
