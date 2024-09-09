import FooterNavbar from '../FooterNavbar/FooterNavbar'
import OllieLogoSection from '../OllieLogoSection/OllieLogoSection'
import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<OllieLogoSection />
			<FooterNavbar />
		</footer>
	)
}
