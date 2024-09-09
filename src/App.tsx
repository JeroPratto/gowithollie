import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductLayout from './components/ProductLayout'
import About from './pages/About/About'
import Header from './components/Header/Header'
import ProductModal from './components/ProductModal/ProductModal'
import CartModal from './components/CartModal/CartModal'
import { useEffect, useState } from 'react'
import ProductPage from './pages/ProductPage/ProductPage'
import { useOpenModal } from './store/openModal'

function App() {
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
		<BrowserRouter>
			<ScrollTop />
			<Header />
			{isDesktop && <ProductModal />}
			<CartModal />
			<Routes>
				<Route element={<ProductLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/products/ollie-helmet-bag' element={<ProductPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App

const ScrollTop = () => {
	const { closeCart, closeProduct } = useOpenModal()
	const { pathname } = useLocation()
	useEffect(() => {
		closeCart()
		closeProduct()
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}
