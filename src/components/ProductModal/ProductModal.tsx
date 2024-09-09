import { ReactNode, useState } from 'react'
import { useCartStore } from '../../store/CartStore'
import { useColorStore } from '../../store/ColorStore'
import { useOpenModal } from '../../store/openModal'
import styles from './ProductModal.module.css'
import closeIcon from '/closeIcon.svg'

export default function ProductModal() {
	const { productModal, closeProduct } = useOpenModal()
	const { addProduct } = useCartStore()
	const [currentIndex, setCurrentIndex] = useState(0)
	const { color } = useColorStore()
	const handleAddProduct = () => {
		addProduct({ color, currentPrice: 70, prePrice: 75, quantity: 1 })
	}
	return (
		<div
			className={`${styles.background} ${
				productModal ? styles.backgroundActive : ''
			}`}
		>
			<div className={`${productModal ? styles.open : ''} ${styles.container}`}>
				<button
					className={styles.closeButton}
					aria-label='close modal'
					onClick={closeProduct}
				>
					<img src={closeIcon} alt='' />
				</button>
				<div className={styles.header}>
					<div className={styles.titleAndColor}>
						<h2 className={styles.title}>Ollie Helmet Bag</h2>
						<p className={styles.color}>{color}</p>
					</div>
					<div className={styles.prices}>
						<p className={styles.price}>€70,00</p>
						<p className={styles.prePrice}>€75,00</p>
					</div>
				</div>
				<div className={styles.main}>
					<DropDown
						index={1}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
						title='About this product'
					>
						<p className={styles.dropdownText}>
							Easy to use. Easy to secure. Easy to carry. <br />
							<br />
							The Ollie Helmet Bag keeps your helmet safe and dry with your
							parked scooter, so you can go hands-free without your helmet. It’s
							compatible with 99% of scooters with a buddy seat. Features a
							minimalistic, multifunctional design with magnetic closing system.
							Ideal for everyday use like carrying groceries, books or gym gear
							when not locked to your scooter. Easily foldable, so you can store
							it in your buddyseat. No additional lock is required to secure the
							Ollie.
							<br />
							<br />
							Made from recycled materials, the Ollie Helmet Bag is 100%
							waterproof and easy to clean.
						</p>
					</DropDown>
					<DropDown
						index={2}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
						title='Product specifications'
					>
						<ul className={styles.specifications}>
							<li>
								<p className={styles.nameSpec}>Measurements:</p>
								<p className={styles.spec}>H57 x B33 x D33cm</p>
							</li>
							<li>
								<p className={styles.nameSpec}>Capacity:</p>
								<p className={styles.spec}>41L opened, 21L closed</p>
							</li>
							<li>
								<p className={styles.nameSpec}>Weight:</p>
								<p className={styles.spec}>425 gram</p>
							</li>
							<li>
								<p className={styles.nameSpec}>Coating:</p>
								<p className={styles.spec}>100% Thermoplastic polyurethane</p>
							</li>
							<li>
								<p className={styles.nameSpec}>Materials:</p>
								<p className={styles.spec}>
									80% Recycled polyester / 20% polyester <br />
									100% Recycled plastic components
									<br />
									100% Nylon strap
									<br />
									100% Polyester handles
									<br />
									100% Hypalon label
									<br />
								</p>
							</li>
						</ul>
					</DropDown>
					<DropDown
						index={3}
						currentIndex={currentIndex}
						setCurrentIndex={setCurrentIndex}
						title='Shipping & Returns'
					>
						<p className={styles.dropdownText}>
							We ship to most EU countries from our base in the Netherlands.{' '}
							<br />
							<br />
							In the Netherlands and Belgium, orders placed before 22:00 Monday—
							Saturday will be shipped the same day. Orders placed on Sunday
							will be shipped on Monday. Delivery costs €3,95 in the
							Netherlands, Belgium and Germany. For other EU countries, please
							see details at checkout. Ordering two or more Ollie bags? Delivery
							is free within the Netherlands, Belgium and Germany.
							<br />
							<br />
							Returns are accepted within 30 days, provided they’re unused.
							Return shipping costs are the responsibility of the customer.
						</p>
					</DropDown>
					<div className={styles.addProduct} onClick={handleAddProduct}>
						<button className={styles.addProductBtn}>Add to cart</button>
						<p>Shipping & Taxes are calculated at checkout</p>
					</div>
				</div>
			</div>
		</div>
	)
}

interface DropDownProps {
	title: string
	index: number
	currentIndex: number
	setCurrentIndex: (index: number) => void
	children: ReactNode
}

const DropDown = ({
	index,
	currentIndex,
	setCurrentIndex,
	title,
	children,
}: DropDownProps) => {
	const changeIndex = () => {
		if (currentIndex === index) setCurrentIndex(0)
		else setCurrentIndex(index)
	}
	return (
		<div className={styles.item}>
			<button className={styles.titleItem} onClick={changeIndex}>
				{title}
			</button>
			<div
				className={`${styles.grid} ${
					currentIndex === index ? styles.contentOpen : ''
				}`}
			>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}
