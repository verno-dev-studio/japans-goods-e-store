import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCategory } from '../context/CategoryContext';

const Cart = () => {
	const { cartItems, removeFromCart, totalItems, totalPrice } = useCart();
	const { lastCategory } = useCategory();

	if (cartItems.length === 0) {
		return (
			<div className='cart-container'>
				<h1 className='cart-heading'>Shopping Cart</h1>
				<div className='cart-empty'>
					<div className='empty-icon'>🛒</div>
					<p className='empty-text'>Your cart is empty</p>
					<Link
						to={`/category/${lastCategory}`}
						className='empty-link'
					>
						Continue Shopping
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='cart-container'>
			<h1 className='cart-heading'>Shopping Cart</h1>

			<div className='cart-layout'>
				<ul className='cart-list'>
					{cartItems.map((item) => (
						<li
							key={item.id}
							className='cart-item'
						>
							<div className='cart-item__image-wrapper'>
								<img
									src={item.img}
									alt={item.name}
									className='cart-item__image'
								/>
							</div>

							<div className='cart-item__info'>
								<h3 className='cart-item__name'>{item.name}</h3>
								<p className='cart-item__price'>${item.price} each</p>
							</div>

							<div className='cart-item__actions'>
								<span className='cart-item__quantity'>Qty: {item.quantity}</span>
								<span className='cart-item__subtotal'>${item.price * item.quantity}</span>
								<button
									type='button'
									className='cart-item__remove'
									onClick={() => removeFromCart(item.id)}
									aria-label={`Remove ${item.name} from cart`}
								>
									Remove
								</button>
							</div>
						</li>
					))}
				</ul>

				<aside className='cart-sidebar'>
					<div className='cart-sidebar__card'>
						<h2 className='cart-sidebar__title'>Order Summary</h2>

						<div className='cart-sidebar__row'>
							<span>Items</span>
							<span>{totalItems}</span>
						</div>

						<div className='cart-sidebar__row cart-sidebar__row--total'>
							<span>Total</span>
							<span className='cart-sidebar__total'>${totalPrice}</span>
						</div>

						<Link
							to='/checkout'
							className='cart-sidebar__checkout'
						>
							Proceed to Checkout
						</Link>

						<Link
							to={`/category/${lastCategory}`}
							className='cart-sidebar__link'
						>
							Continue Shopping
						</Link>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Cart;
