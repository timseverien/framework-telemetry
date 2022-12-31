export type TelemetryDisclosure = 'NONE' | 'DOCS' | 'INITIALIZATION' | 'INSTALLATION' | 'USAGE';
export type TelemetryInformationType = 'DEVICE' | 'ENVIRONMENT' | 'PERSONAL' | 'PROJECT' | 'USAGE';
export type TelemetryScope = 'CLI' | 'CLIENT_SIDE' | 'INSTALLATION';
export type TelemetryType = 'NONE' | 'OPT_IN' | 'OPT_OUT';

export type TelemetryOptOutCommandOption = {
	type: 'COMMAND';
	value: string;
};

export type TelemetryOptOutEnvironmentVariableOption = {
	type: 'ENVIRONMENT_VARIABLE';
	value: string;
};

export type TelemetryOptOutOption =
	| TelemetryOptOutCommandOption
	| TelemetryOptOutEnvironmentVariableOption;

export type TelemetryResource = {
	type: 'DECISION' | 'DOCUMENTATION';
	url: string;
};

export type TelemetryInformationNone = { type: 'NONE' };

export type TelemetryInformationOptIn = {
	type: 'OPT_IN';
	disclosure: TelemetryDisclosure;
	scopes: TelemetryScope[];
	informationType: TelemetryInformationType[];
	resources: TelemetryResource[];
	optOutOptions: TelemetryOptOutOption[];
};

export type TelemetryInformationOptOut = {
	type: 'OPT_OUT';
	disclosure: TelemetryDisclosure;
	scopes: TelemetryScope[];
	informationType: TelemetryInformationType[];
	resources: TelemetryResource[];
	optOutOptions: TelemetryOptOutOption[];
};

export type TelemetryInformation =
	| TelemetryInformationNone
	| TelemetryInformationOptIn
	| TelemetryInformationOptOut;

export const TELEMETRY_DISCLOSURE_LABELS: { [key in TelemetryDisclosure]: string } = {
	NONE: 'None',
	DOCS: 'Documentation',
	INITIALIZATION: 'Initialization',
	INSTALLATION: 'Installation',
	USAGE: 'Usage',
};

export const TELEMETRY_RESOURCE_TYPE_LABELS: { [key in TelemetryResource['type']]: string } = {
	DECISION: 'Decision',
	DOCUMENTATION: 'Documentation',
};

export const TELEMETRY_TYPE_LABELS: { [key in TelemetryType]: string } = {
	NONE: 'None',
	OPT_IN: 'Opt-in',
	OPT_OUT: 'Opt-out',
};

export const TELEMETRY_INFORMATION_TYPE_LABELS: { [key in TelemetryInformationType]: string } = {
	DEVICE: 'Device',
	ENVIRONMENT: 'Environment',
	PERSONAL: 'Personal information',
	PROJECT: 'Project',
	USAGE: 'Usage',
};

export const TELEMETRY_SCOPE_LABELS: { [key in TelemetryScope]: string } = {
	CLI: 'CLI',
	CLIENT_SIDE: 'Client-side',
	INSTALLATION: 'Installation',
};
