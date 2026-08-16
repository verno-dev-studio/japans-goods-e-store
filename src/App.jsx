import {createHashRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Layout from './components/Layout/Layout';

const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{index: true, element: <Home />},
			{path: '/about', element: <About />},
			{path: '/cart', element: <Cart />},
			{path: '/checkout', element: <Checkout />},
			{path: '/category/:categoryID', element: <Category />},
			{path: '/product/:productID', element: <ProductDetails />},
			{path: '*', element: <NotFound />},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router}></RouterProvider>;
}
