import styles from './Step.module.css'

interface StepProps {
	number: string
	description: string
}

export default function Step({ number, description }: StepProps) {
	return (
		<div className={styles.container}>
			<div className={styles.stepAndDescription}>
				<p className={styles.step}>Step {number}</p>
				<p className={styles.desc}>{description}</p>
			</div>
			<div className={styles.imageContainer}>
				<img src={`/steps/step-${number}.svg`} alt='' />
			</div>
		</div>
	)
}
