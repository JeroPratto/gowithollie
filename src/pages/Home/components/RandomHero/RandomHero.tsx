import { useState } from 'react'
import styles from './RandomHero.module.css'
import getRandomHero from './utils/getRandomHero'
import ollieLogo from '/hero/ollie.svg'

export default function RandomHero() {
	const [{ urlImage, text: title }] = useState(getRandomHero())
	return (
		<section className={styles.section}>
			<h1 className={styles.title}>{title}</h1>
			<img src={urlImage} alt='' className={styles.image} />
			<img src={ollieLogo} alt='' className={styles.ollieLogo} />
		</section>
	)
}
