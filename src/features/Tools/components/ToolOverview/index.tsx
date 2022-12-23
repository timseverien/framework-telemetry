import { ToolFilter, ToolFilterOptions } from '../ToolFilter';
import { ToolTable } from '../ToolTable';
import { TelemetryType, TELEMETRY_TYPE_LABELS } from '@domain/telemetry';
import type { Tool } from '@domain/tool';
import { useQueryParam, useArrayQueryParam } from '@functions/url';

const useToolFilterOptions = (): [ToolFilterOptions, (options: ToolFilterOptions) => any] => {
	const [searchQuery, setSearchQuery] = useQueryParam('q');
	const [selectedTypes, setSelectedTypes] = useArrayQueryParam('t', (t) =>
		Object.keys(TELEMETRY_TYPE_LABELS).includes(t) ? (t as TelemetryType) : null
	);

	return [
		{
			searchQuery,
			selectedTypes,
		},
		({ searchQuery, selectedTypes }: ToolFilterOptions) => {
			setSearchQuery(searchQuery);
			setSelectedTypes(selectedTypes);
		},
	];
};

export const ToolOverview = ({ tools }: { tools: Tool[] }) => {
	const [filterOptions, setFilterOptions] = useToolFilterOptions();

	const toolsFiltered = tools
		.filter(
			(t) =>
				!filterOptions.searchQuery ||
				t.name.toLowerCase().includes(filterOptions.searchQuery.toLowerCase())
		)
		.filter(
			(t) =>
				filterOptions.selectedTypes.length === 0 ||
				filterOptions.selectedTypes.includes(t.telemetry.type)
		);

	const resetFilters = () =>
		setFilterOptions({
			searchQuery: null,
			selectedTypes: [],
		});

	return (
		<>
			<ToolFilter options={filterOptions} setOptions={setFilterOptions} onReset={resetFilters} />
			{toolsFiltered.length > 0 ? (
				<ToolTable tools={toolsFiltered} />
			) : (
				<>
					<p>No results for these filters!</p>
					<button onClick={() => resetFilters()}>Reset filters</button>
				</>
			)}
		</>
	);
};
