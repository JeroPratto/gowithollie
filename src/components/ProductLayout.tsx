import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ProductCarousel from './ProductCarousel/ProductCarousel'
export default function ProductLayout() {
	const [isDesktop, setIsDesktop] = useState(false)
	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 1024)
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return (
		<div>
			<Outlet />
			{isDesktop && <ProductCarousel />}
		</div>
	)
}
