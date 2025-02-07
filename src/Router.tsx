import { Route, Routes } from 'react-router'
import { DefaultLayout } from './layouts/Default'
import { Home } from './pages/Home'
import { ShoppingCart } from './pages/ShoppingCart'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
			</Route>
		</Routes>
	)
}
