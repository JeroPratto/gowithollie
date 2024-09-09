import styles from './OllieLogoSection.module.css'
import logo from '/hero/ollie.svg'
export default function OllieLogoSection() {
	return (
		<div className={styles.container}>
			<img src={logo} alt='ollie logo' />
		</div>
	)
}
