import { Link } from 'react-router-dom'
import { useCartStore } from '../../store/CartStore'
import { useOpenModal } from '../../store/openModal'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'

export default function Header() {
	const {
		cartModal,
		openCart,
		closeCart,
		productModal,
		closeProduct,
		openProduct,
	} = useOpenModal()
	const { quantityProducts } = useCartStore()
	const [preQuantity, setPreQuantity] = useState(quantityProducts)
	const handleOpenCart = () => {
		if (cartModal) closeCart()
		else openCart()
	}

	const handleOpenProductModal = () => {
		if (productModal) closeProduct()
		else openProduct()
	}

	const [animateCart, setAnimateCart] = useState(false)

	useEffect(() => {
		if (!cartModal && preQuantity != quantityProducts) {
			setPreQuantity(quantityProducts)
			setAnimateCart(true)
			const timer = setTimeout(() => setAnimateCart(false), 1000)
			return () => clearTimeout(timer)
		}
	}, [quantityProducts])
	return (
		<header className={styles.container}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link to='/' className={styles.link}>
						Home
					</Link>
				</li>
				<li className={styles.item}>
					<button
						className={`${styles.button} ${styles.desktop}`}
						onClick={handleOpenProductModal}
					>
						Product
					</button>
					<Link
						to='/products/ollie-helmet-bag'
						className={`${styles.link} ${styles.mobile}`}
					>
						Product
					</Link>
				</li>
				<li className={styles.item}>
					<Link to='/about' className={styles.link}>
						About
					</Link>
				</li>
				<li className={styles.item}>
					<button
						className={`${styles.button} ${
							animateCart ? styles.addProduct : ''
						}`}
						onClick={handleOpenCart}
					>
						<span className={styles.cartDesktop}>
							Cart ( {quantityProducts} )
						</span>
						<span className={styles.cartMobile}>{quantityProducts}</span>
					</button>
				</li>
			</ul>
		</header>
	)
}
