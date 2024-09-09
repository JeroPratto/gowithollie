export interface RandomHero {
	urlImage: string
	text: string
}

export default function getRandomHero(): RandomHero {
	const heros: RandomHero[] = [
		{
			urlImage: '/hero/Frame_1.webp',
			text: "There's a better way to store your helmet.",
		},
		{
			urlImage: '/hero/Vignette_overlay_edit_file-4_copy.webp',
			text: "Helmets aren't handbags.",
		},
		{
			urlImage: '/hero/Frame_5.webp',
			text: 'Use your head, lose the helmet.',
		},
		{
			urlImage: '/hero/Vignette_overlay_edit_file-3_copy.webp',
			text: "Helmets aren't +1's.",
		},
		{
			urlImage: '/hero/Vignette_overlay_edit_file-6_copy.webp',
			text: 'Helmets belong on your head, not in your way.',
		},
		{
			urlImage: '/hero/Vignette_overlay_edit_file-5_copy.webp',
			text: 'Helmets should only be seen on heads.',
		},
	]
	const randomIndex = Math.floor(Math.random() * heros.length)
	return heros[randomIndex]
}
