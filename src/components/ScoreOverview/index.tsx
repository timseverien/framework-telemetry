import { Card } from '@components/Card';
import { Flow } from '@components/Flow';
import { ScoreDonut } from '@components/Score';
import { VisuallyHidden } from '@components/VisuallyHidden';
import type {
	TelemetryDisclosure,
	TelemetryInformation,
	TelemetryInformationType,
	TelemetryType,
} from '@domain/telemetry';
import {
	formatScore,
	getDisclosureScore,
	getInformationTypeScore,
	getTypeScore,
	getWorstInformationType,
} from '@functions/telemetry';
import styles from './styles.module.css';

const getScoreTypeReason = (type: TelemetryType) => {
	if (type === 'OPT_IN') {
		return 'Consent is requested before collecting information';
	}

	if (type === 'OPT_OUT') {
		return 'No consent is requested';
	}

	return '';
};

const getScoreDisclosureReason = (disclosure: TelemetryDisclosure) => {
	switch (disclosure) {
		case 'INSTALLATION':
			return 'Data collection is disclosed during installation';
		case 'INITIALIZATION':
			return 'Data collection is disclosed during initialization';
		case 'USAGE':
			return 'Data collection is disclosed when the tool is used';
		case 'DOCS':
			return 'Data collection is only disclosed on documentation';
		default:
			return 'Data collection is never mentioned';
	}
};

const getScoreInformationTypeReason = (informationTypes: TelemetryInformationType[]) => {
	const worstInformationType = getWorstInformationType(informationTypes);

	switch (worstInformationType) {
		case 'PERSONAL':
			return 'Personal information is collected';
		case 'PROJECT':
			return 'Project information is collected';
		case 'DEVICE':
			return 'Device information is collected';
		case 'USAGE':
			return 'Usage is collected';
		case 'ENVIRONMENT':
			return 'Environment information is collected';
		default:
			return null;
	}
};

const ScoreOverviewItem = ({
	label,
	reason,
	value,
}: {
	label: string;
	reason: string;
	value: number;
}) => (
	<Flow class={styles.scoreOverviewItem}>
		<ScoreDonut value={value} />
		<h3 class={styles.scoreOverviewItemTitle}>
			{label}
			<VisuallyHidden>: ${formatScore(value)}</VisuallyHidden>
		</h3>
		<p class={styles.scoreOverviewItemReason}>{reason}</p>
	</Flow>
);

export const ScoreOverview = ({ telemetry }: { telemetry: TelemetryInformation }) => {
	if (telemetry.type === 'NONE') {
		return null;
	}

	const scoreType = getTypeScore(telemetry.type);
	const scoreDisclosure = getDisclosureScore(telemetry.disclosure);
	const scoreInformationType = getInformationTypeScore(telemetry.informationType);

	return (
		<Card>
			<div class={styles.scoreOverview}>
				<ScoreOverviewItem
					label="Requesting consent"
					value={scoreType}
					reason={getScoreTypeReason(telemetry.type)}
				/>
				<ScoreOverviewItem
					label="Disclosure"
					value={scoreDisclosure}
					reason={getScoreDisclosureReason(telemetry.disclosure)}
				/>
				<ScoreOverviewItem
					label="Data sensitivity"
					value={scoreInformationType}
					reason={getScoreInformationTypeReason(telemetry.informationType) ?? ''}
				/>
			</div>
		</Card>
	);
};
