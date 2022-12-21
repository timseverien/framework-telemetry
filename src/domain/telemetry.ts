export type TelemetryInformationType = 'DEVICE' | 'ENVIRONMENT' | 'PERSONAL' | 'PROJECT' | 'USAGE';
export type TelemetryScope = 'CLI' | 'CLIENT_SIDE' | 'INSTALLATION';
export type TelemetryType = 'NONE' | 'OPT_IN' | 'OPT_OUT' | 'UNKNOWN';

export type TelemetryInformation = {
	name: string;
	scopes: TelemetryScope[];
	type: TelemetryType;
	informationType: TelemetryInformationType[];
	resource: string | null;
	website: string;
};
