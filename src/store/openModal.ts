import { create } from 'zustand'

interface State {
	cartModal: boolean
	productModal: boolean
	openCart: () => void
	closeCart: () => void
	openProduct: () => void
	closeProduct: () => void
}

export const useOpenModal = create<State>((set) => ({
	cartModal: false,
	productModal: false,
	openCart: () => set({ cartModal: true, productModal: false }),
	closeCart: () => set({ cartModal: false }),
	openProduct: () => set({ cartModal: false, productModal: true }),
	closeProduct: () => set({ productModal: false }),
}))
