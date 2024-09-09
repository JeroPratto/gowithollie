import { Link } from 'react-router-dom'
import styles from './DescriptionSection.module.css'

export default function DescriptionSection() {
	return (
		<section className={styles.container}>
			<p>Helmets aren't handbags.</p>
			<br /> <br />
			<p>
				The Ollie Helmet Bag is a smart, secure, useful way to store your
				scooter helmet and much more.
			</p>
			<br /> <br />
			<p>
				Go hands-free. Go helmet-free. <br /> Go carefree.
			</p>
			<br /> <br />
			<p>Go with Ollie.</p>
			<Link to='/about' className={styles.link}>
				How does Ollie work?
			</Link>
		</section>
	)
}
