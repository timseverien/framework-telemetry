import { Button } from '@components/Button/Button';
import { Flow } from '@components/Flow';
import { TelemetryType, TELEMETRY_TYPE_LABELS } from '@domain/telemetry';
import type { Tool } from '@domain/tool';
import { useArrayQueryParam, useQueryParam } from '@functions/url';
import { ToolFilter, ToolFilterOptions } from '../ToolFilter';
import { ToolTable } from '../ToolTable';

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
		<Flow size={2}>
			<ToolFilter options={filterOptions} setOptions={setFilterOptions} onReset={resetFilters} />
			{toolsFiltered.length > 0 ? (
				<ToolTable tools={toolsFiltered} />
			) : (
				<Flow>
					<p>No results for these filters!</p>
					<Button onClick={() => resetFilters()}>Reset filters</Button>
				</Flow>
			)}
		</Flow>
	);
};
