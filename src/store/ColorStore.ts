import { create } from 'zustand'

interface State {
	color: string
	setColor: (color: string) => void
}
export const useColorStore = create<State>((set) => ({
	color: 'Black',
	setColor: (color) => set({ color }),
}))
