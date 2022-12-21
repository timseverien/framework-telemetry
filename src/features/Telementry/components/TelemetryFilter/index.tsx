import { ChipList, SelectableChip } from '../../../../components/Chip';
import { TelemetryType, TELEMETRY_TYPE_LABELS } from '../../telemetry';
import styles from './styles.module.css';

export type TelemetryFilterOptions = {
	searchQuery: string | null;
	selectedTypes: TelemetryType[];
};

export const TelemetryFilter = ({
	options,
	setOptions,
	onReset,
}: {
	options: TelemetryFilterOptions;
	setOptions: (options: TelemetryFilterOptions) => any;
	onReset: () => any;
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
				<label class={styles.filterLabel}>Search by name</label>
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

			{(options.searchQuery || options.selectedTypes.length > 0) && (
				<div class={styles.filter}>
					<button onClick={() => onReset()}>Reset filters</button>
				</div>
			)}
		</div>
	);
};
