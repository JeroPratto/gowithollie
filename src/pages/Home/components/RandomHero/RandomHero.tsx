import { useState } from 'react'
import styles from './RandomHero.module.css'
import getRandomHero from './utils/getRandomHero'
import ollieLogo from '/hero/ollie.svg'

export default function RandomHero() {
	const [{ urlImage, text: title }] = useState(getRandomHero())
	const [isLoading, setIsLoading] = useState(true)
	const handleImageLoad = () => setIsLoading(false)

	return (
		<section className={styles.section}>
			<h1 className={styles.title}>{title}</h1>
			{isLoading && <div className={styles.skeleton}>test</div>}
			<img
				src={urlImage}
				alt=''
				className={`${styles.image} ${isLoading ? styles.hidden : ''}`}
				onLoad={handleImageLoad}
			/>
			<img src={ollieLogo} alt='' className={styles.ollieLogo} />
		</section>
	)
}
