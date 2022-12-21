import { Card } from '../../../../components/Card';
import { useQueryParam, useArrayQueryParam } from '../../../../functions/url';
import {
	TELEMETRY_TYPE_LABELS,
	type TelemetryType,
	type TelemetryInformation,
} from '../../telemetry';
import { type TelemetryFilterOptions, TelemetryFilter } from '../TelemetryFilter';
import { TelemetryTable } from '../TelemetryTable';

const useTelemetryFilterOptions = (): [
	TelemetryFilterOptions,
	(options: TelemetryFilterOptions) => any
] => {
	const [searchQuery, setSearchQuery] = useQueryParam('q');
	const [selectedTypes, setSelectedTypes] = useArrayQueryParam('t', (t) =>
		Object.keys(TELEMETRY_TYPE_LABELS).includes(t) ? (t as TelemetryType) : null
	);

	return [
		{
			searchQuery,
			selectedTypes,
		},
		({ searchQuery, selectedTypes }: TelemetryFilterOptions) => {
			setSearchQuery(searchQuery);
			setSelectedTypes(selectedTypes);
		},
	];
};

export const TelemetryOverview = ({ telemetryList }: { telemetryList: TelemetryInformation[] }) => {
	const [filterOptions, setFilterOptions] = useTelemetryFilterOptions();

	const telemetryListFiltered = telemetryList
		.filter(
			(ti) =>
				!filterOptions.searchQuery ||
				ti.name.toLowerCase().includes(filterOptions.searchQuery.toLowerCase())
		)
		.filter(
			(ti) =>
				filterOptions.selectedTypes.length === 0 || filterOptions.selectedTypes.includes(ti.type)
		);

	const resetFilters = () =>
		setFilterOptions({
			searchQuery: null,
			selectedTypes: [],
		});

	return (
		<Card>
			<TelemetryFilter
				options={filterOptions}
				setOptions={setFilterOptions}
				onReset={resetFilters}
			/>
			{telemetryListFiltered.length > 0 ? (
				<TelemetryTable telemetryList={telemetryListFiltered} />
			) : (
				<>
					<p>No results for these filters!</p>
					<button onClick={() => resetFilters()}>Reset filters</button>
				</>
			)}
		</Card>
	);
};
