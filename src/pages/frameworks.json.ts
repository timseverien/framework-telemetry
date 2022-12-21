import { TELEMETRY_TOOL_LIST } from '../data/telemetry';

export async function get() {
	return {
		body: JSON.stringify(TELEMETRY_TOOL_LIST),
	};
}
