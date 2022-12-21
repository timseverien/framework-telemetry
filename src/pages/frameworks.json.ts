import { TELEMETRY_TOOL_LIST } from '../features/Telementry/telemetry';

export async function get() {
	return {
		body: JSON.stringify(TELEMETRY_TOOL_LIST),
	};
}
