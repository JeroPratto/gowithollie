import { useCartStore } from '../../store/CartStore'
import styles from './CartItem.module.css'
import less from '/lessIcon.svg'
import more from '/moreIcon.svg'

interface CartItemProps {
	color: string
	currentPrice: number
	prePrice: number
	quantity: number
}

export default function CartItem({
	color,
	currentPrice,
	prePrice,
	quantity,
}: CartItemProps) {
	const { addQuantity, lessQuantity, deleteProduct } = useCartStore()
	const handleDecrease = () => {
		if (quantity === 1) deleteProduct(color)
		else lessQuantity(color)
	}
	const handleIncrease = () => addQuantity(color)
	const handleDelete = () => deleteProduct(color)
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img
					src={`/product/${color}-cart.avif`}
					alt={`Ollie Helmet Bag - ${color}`}
				/>
			</div>
			<div className={styles.information}>
				<div className={styles.header}>
					<p className={styles.name}>
						Ollie Helmet Bag <br />
						{color}
					</p>
					<div className={styles.quantityControls}>
						<button
							aria-label='Decrease quantity for Ollie Helmet Bag'
							onClick={handleDecrease}
						>
							<img src={less} alt='' />
						</button>
						<p aria-label='Quantity for Ollie Helmet Bag'>{quantity}</p>
						<button
							aria-label='Increase quantity for Ollie Helmet Bag'
							onClick={handleIncrease}
						>
							<img src={more} alt='' />
						</button>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.price}>
						<p className={styles.currentPrice} aria-label='current price'>
							€{currentPrice.toFixed(2)}
						</p>
						<p className={styles.prePrice} aria-label='origianl price'>
							€{prePrice.toFixed(2)}
						</p>
					</div>
					<button className={styles.remove} onClick={handleDelete}>
						Remove
					</button>
				</div>
			</div>
		</div>
	)
}
