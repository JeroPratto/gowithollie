import toast, { Toaster } from 'react-hot-toast'
import { useCartStore } from '../../store/CartStore'
import { useOpenModal } from '../../store/openModal'
import CartItem from './CartItem'
import styles from './CartModal.module.css'
import closeIcon from '/closeIcon.svg'

export default function CartModal() {
	const { cartModal, closeCart } = useOpenModal()
	const { products, totalPrice, deleteAllproducts } = useCartStore()
	const fetch = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve('Resolve')
				deleteAllproducts()
			}, 3000)
		})
	}
	const submit = () => {
		const promise = fetch()
		toast.promise(promise, {
			loading: 'Packaging your product',
			success: 'We are sending it',
			error: 'Erorr on wood paper',
		})
	}
	return (
		<div
			className={`${styles.background} ${
				cartModal ? styles.backgroundActive : ''
			}`}
		>
			<div className={`${cartModal ? styles.open : ''} ${styles.container}`}>
				<button
					className={styles.closeButton}
					aria-label='close modal'
					onClick={closeCart}
				>
					<img src={closeIcon} alt='' />
				</button>
				<h2 className={styles.title}>Cart</h2>

				{products.length > 0 ? (
					<div className={styles.productsContainer}>
						{products.map((product, index) => (
							<CartItem {...product} key={index} />
						))}
					</div>
				) : (
					<div className={styles.empty}>
						<p>Your cart is empty</p>
					</div>
				)}

				<div className={styles.totalTaxes}>
					<p>Total Incl. Taxes</p>
					<p>€{totalPrice.toFixed(2)}</p>
				</div>
				<div className={styles.checkout}>
					<button
						className={styles.checkoutBtn}
						disabled={products.length <= 0}
						onClick={submit}
					>
						Check out
					</button>
					<Toaster position='top-right' />
					<p>Shipping & Taxes are calculated at checkout</p>
				</div>
			</div>
		</div>
	)
}
