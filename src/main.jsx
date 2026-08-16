import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CategoryProvider } from './context/CategoryContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './sass/index.sass';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<CategoryProvider>
			<CartProvider>
				<App />
			</CartProvider>
		</CategoryProvider>
	</StrictMode>,
);
