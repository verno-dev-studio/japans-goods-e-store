import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);

			if (existingItem) {
				return prevItems.map((item) =>
					item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
				);
			}

			return [
				...prevItems,
				{
					id: product.id,
					name: product.name,
					price: product.price,
					img: product.img,
					quantity: 1,
				},
			];
		});
	};

	const removeFromCart = (productId) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
	};

	const clearCart = () => {
		setCartItems([]);
	};

	const totalItems = useMemo(
		() => cartItems.reduce((sum, item) => sum + item.quantity, 0),
		[cartItems],
	);

	const totalPrice = useMemo(
		() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
		[cartItems],
	);

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);

	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}

	return context;
};
