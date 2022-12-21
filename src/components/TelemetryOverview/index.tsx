import { TELEMETRY_TYPE_LABELS } from '../../data/telemetry';
import type { TelemetryInformation, TelemetryType } from '../../domain/telemetry';
import { useArrayQueryParam, useQueryParam } from '../../functions/url';
import { TelemetryFilter, TelemetryFilterOptions } from '../TelemetryFilter';
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

	console.log(JSON.stringify(filterOptions, null, 2));

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
		<>
			<TelemetryFilter options={filterOptions} setOptions={setFilterOptions} />
			{telemetryListFiltered.length > 0 ? (
				<TelemetryTable telemetryList={telemetryListFiltered} />
			) : (
				<>
					<p>No results for these filters!</p>
					<button onClick={() => resetFilters()}>Reset filters</button>
				</>
			)}
		</>
	);
};
