import Footer from '../../components/Footer/Footer'
import styles from './About.module.css'
import Description from './components/Description'
import Step from './components/Step'

export default function About() {
	return (
		<div className={styles.leftContainer}>
			<Description />
			{steps.map((step) => (
				<Step {...step} key={step.number} />
			))}
			<Footer />
		</div>
	)
}

const steps = [
	{
		number: '1',
		description:
			'Place your helmet inside the Ollie, keeping hold of the chinstrap.',
	},
	{
		number: '2',
		description: 'Slide the chinstrap through the hook at the top of the bag.',
	},
	{
		number: '3',
		description:
			'Close the bag and grab the handle at the bottom (A) to position the top of the Ollie over the edge of your open buddyseat (B).',
	},
	{
		number: '4',
		description:
			'Close and lock your seat, securing your Ollie (and chinstrap) inside the scooter seat.',
	},
	{
		number: '5',
		description:
			'Go forth and enjoy your day, safe in the knowledge that your helmet is secured!',
	},
]
