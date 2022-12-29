import styles from './styles.module.css';
import { Button } from '@components/Button/Button';
import { ChipList, SelectableChip } from '@components/Chip';
import { type TelemetryType, TELEMETRY_TYPE_LABELS } from '@domain/telemetry';

export type ToolFilterOptions = {
	searchQuery: string | null;
	selectedTypes: TelemetryType[];
};

const TelemetryFilter = ({
	value,
	onChange,
}: {
	value: TelemetryType[];
	onChange: (value: TelemetryType[]) => any;
}) => (
	<div class={styles.filter}>
		<div class={styles.filterLabel}>Tracking type</div>
		<ChipList>
			{Object.entries(TELEMETRY_TYPE_LABELS).map(([type, label]) => {
				const isActive = value.includes(type as TelemetryType);

				return (
					<SelectableChip
						active={isActive}
						onClick={() =>
							onChange(
								isActive ? value.filter((t) => t !== type) : [...value, type as TelemetryType]
							)
						}
					>
						{label}
					</SelectableChip>
				);
			})}
		</ChipList>
	</div>
);

const ToolNameSearch = ({
	value,
	onChange,
}: {
	value: string;
	onChange: (value: string) => any;
}) => (
	<div class={styles.filter}>
		<label class={styles.filterLabel}>Search by name</label>
		<input type="search" value={value} onInput={(ev) => onChange(ev.currentTarget.value)} />
	</div>
);

export const ToolFilter = ({
	options,
	setOptions,
	onReset,
}: {
	options: ToolFilterOptions;
	setOptions: (options: ToolFilterOptions) => any;
	onReset: () => any;
}) => {
	return (
		<div class={styles.filterList}>
			<TelemetryFilter
				value={options.selectedTypes}
				onChange={(selectedTypes) =>
					setOptions({
						...options,
						selectedTypes,
					})
				}
			/>

			{/* <ToolNameSearch
				value={options.searchQuery || ''}
				onChange={(searchQuery) =>
					setOptions({
						...options,
						searchQuery,
					})
				}
			/> */}

			{/* {(options.searchQuery || options.selectedTypes.length > 0) && (
				<div class={styles.filter}>
					<Button variant="secondary" onClick={() => onReset()}>
						Reset filters
					</Button>
				</div>
			)} */}
		</div>
	);
};
