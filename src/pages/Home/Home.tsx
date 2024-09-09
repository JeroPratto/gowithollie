import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import DescriptionSection from './components/DescriptionSection/DescriptionSection'
import RandomHero from './components/RandomHero/RandomHero'
import styles from './Home.module.css'
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel'
import ProductModal from '../../components/ProductModal/ProductModal'

export default function Home() {
	const [isMobile, setIsMobile] = useState(false)
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return (
		<div className={styles.leftContainer}>
			<RandomHero />
			{isMobile && <ProductCarousel />}
			{isMobile && <ProductModal />}
			<DescriptionSection />
			<Footer />
		</div>
	)
}
