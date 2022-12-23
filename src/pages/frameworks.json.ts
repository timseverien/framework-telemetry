import { TOOLS } from '../features/Tools/tools';

export async function get() {
	return {
		body: JSON.stringify(TOOLS),
	};
}
