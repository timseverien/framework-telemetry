import type {
	TelemetryDisclosure,
	TelemetryInformation,
	TelemetryInformationType,
	TelemetryType,
} from '@domain/telemetry';

const disclosureOrder: TelemetryDisclosure[] = [
	'NONE',
	'DOCS',
	'USAGE',
	'INITIALIZATION',
	'INSTALLATION',
];

const informationTypeOrder: TelemetryInformationType[] = [
	'PERSONAL',
	'PROJECT',
	'DEMOGRAPHY',
	'DEVICE',
	'USAGE',
	'ENVIRONMENT',
];

const typeOrder: TelemetryType[] = ['OPT_OUT', 'OPT_IN', 'NONE'];

export const formatScore = (value: number) => (value * 100).toFixed(0);

export const getDisclosureScore = (disclosure: TelemetryDisclosure) =>
	disclosureOrder.indexOf(disclosure) / (disclosureOrder.length - 1);

export const getWorstInformationType = (informationTypes: TelemetryInformationType[]) =>
	informationTypes.reduce<TelemetryInformationType | null>((result, informationType) => {
		if (result === null) return informationType;

		if (informationTypeOrder.indexOf(result) < informationTypeOrder.indexOf(informationType)) {
			return result;
		}

		return informationType;
	}, null);

export const getInformationTypeScore = (informationTypes: TelemetryInformationType[]) => {
	const worstInformationType = getWorstInformationType(informationTypes);

	return worstInformationType
		? informationTypeOrder.indexOf(worstInformationType) / (informationTypeOrder.length - 1)
		: 0;
};

export const getTypeScore = (type: TelemetryType) =>
	typeOrder.indexOf(type) / (typeOrder.length - 1);

export const getTelemetryScore = (telemetry: TelemetryInformation) => {
	if (telemetry.type === 'NONE') return 1;

	return (
		(getDisclosureScore(telemetry.disclosure) +
			getInformationTypeScore(telemetry.informationType) +
			getTypeScore(telemetry.type)) /
		3
	);
};
