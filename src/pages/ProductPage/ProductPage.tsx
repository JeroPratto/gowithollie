import { lazy, Suspense } from 'react'
import Footer from '../../components/Footer/Footer'
import styles from './ProductPage.module.css'

const ProductCarousel = lazy(
	() => import('../../components/ProductCarousel/ProductCarousel'),
)
const ProductModal = lazy(
	() => import('../../components/ProductModal/ProductModal'),
)

export default function ProductPage() {
	return (
		<div className={styles.leftContainer}>
			<div className={styles.mobile}>
				<Suspense
					fallback={
						<div style={{ height: '100vh', backgroundColor: '#FFF' }}></div>
					}
				>
					<ProductCarousel />
					<ProductModal />
				</Suspense>
			</div>
			<Footer />
		</div>
	)
}
