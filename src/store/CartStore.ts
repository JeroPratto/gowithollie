import { create } from 'zustand'

interface Bag {
	color: string
	currentPrice: number
	prePrice: number
	quantity: number
}
interface State {
	products: Bag[]
	totalPrice: number
	quantityProducts: number
	updateTotalPrice: (price: number) => void
	updateProducts: (products: Bag[]) => void
	statusSynchronizer: () => void
	addProduct: (product: Bag) => void
	deleteProduct: (color: string) => void
	addQuantity: (color: string) => void
	lessQuantity: (color: string) => void
	deleteAllproducts: () => void
}

const initialProducts = (): Bag[] => {
	const products = localStorage.getItem('products')
	if (products === null) return []
	else return JSON.parse(products)
}

const initialTotalPrice = (): number => {
	const totalPrice = localStorage.getItem('total-price')
	if (totalPrice === null) return 0
	else return JSON.parse(totalPrice)
}

const initialQuantityProducts = (): number => {
	const products = initialProducts()
	let count = 0
	if (products === null) return count
	else {
		for (let i = 0; i < products.length; i++) {
			count += products[i].quantity
		}
	}
	return count
}

export const useCartStore = create<State>((set) => ({
	products: initialProducts(),
	totalPrice: initialTotalPrice(),
	quantityProducts: initialQuantityProducts(),
	updateTotalPrice: (price: number) => {
		localStorage.setItem('total-price', JSON.stringify(price))
		set({ totalPrice: price })
	},
	updateProducts: (products: Bag[]) => {
		localStorage.setItem('products', JSON.stringify(products))
	},
	addProduct: (product: Bag) => {
		set((state) => {
			const index = state.products.findIndex(
				(bag) => bag.color === product.color,
			)
			let currentPrice = state.totalPrice
			// product exist
			if (index != -1) {
				const storedProducts = state.products
				storedProducts[index].quantity++
				currentPrice += product.currentPrice
				state.updateTotalPrice(currentPrice)
				state.updateProducts(storedProducts)
				return {
					products: storedProducts,
					quantityProducts: state.quantityProducts + 1,
				}
			} else {
				const newProducts = [product, ...state.products]
				state.updateTotalPrice(currentPrice + product.currentPrice)
				state.updateProducts(newProducts)
				return {
					products: newProducts,
					quantityProducts: state.quantityProducts + 1,
				}
			}
		})
	},
	addQuantity: (color: string) => {
		set((state) => {
			const index = state.products.findIndex((bag) => bag.color === color)
			const storedProducts = state.products
			storedProducts[index].quantity++
			const newPrice = state.totalPrice + storedProducts[index].currentPrice
			state.updateTotalPrice(newPrice)
			state.updateProducts(storedProducts)
			return {
				products: storedProducts,
				quantityProducts: state.quantityProducts + 1,
			}
		})
	},
	deleteProduct: (color: string) => {
		set((state) => {
			const index = state.products.findIndex((bag) => bag.color === color)
			const storedProducts = state.products
			const newPrice =
				state.totalPrice -
				storedProducts[index].quantity * storedProducts[index].currentPrice
			const newQuantity =
				state.quantityProducts - storedProducts[index].quantity
			state.updateTotalPrice(newPrice)
			storedProducts.splice(index, 1)
			state.updateProducts(storedProducts)
			return { products: storedProducts, quantityProducts: newQuantity }
		})
	},
	lessQuantity: (color: string) => {
		set((state) => {
			const index = state.products.findIndex((bag) => bag.color === color)
			const storedProducts = state.products
			storedProducts[index].quantity--
			const newPrice = state.totalPrice - storedProducts[index].currentPrice
			state.updateTotalPrice(newPrice)
			state.updateProducts(storedProducts)
			return {
				products: storedProducts,
				quantityProducts: state.quantityProducts - 1,
			}
		})
	},
	statusSynchronizer: () => {
		const preProducts = localStorage.getItem('products')
		const prePrice = localStorage.getItem('total-price')
		if (preProducts && prePrice) {
			const newProducts = JSON.parse(preProducts)
			const newPrice = JSON.parse(prePrice)
			set({ products: newProducts, totalPrice: newPrice })
		}
	},
	deleteAllproducts: () => {
		set((state) => {
			state.updateProducts([])
			state.updateTotalPrice(0)
			return { products: [], totalPrice: 0, quantityProducts: 0 }
		})
	},
}))
