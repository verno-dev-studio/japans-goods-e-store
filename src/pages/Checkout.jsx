import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useCategory } from '../context/CategoryContext';

const Checkout = () => {
	const { cartItems, clearCart, totalItems, totalPrice } = useCart();
	const { lastCategory } = useCategory();
	const [status, setStatus] = useState('form');
	const [formData, setFormData] = useState({
		cardName: '',
		cardNumber: '',
		expiry: '',
		cvv: '',
	});

	if (cartItems.length === 0 && status !== 'success') {
		return (
			<Navigate
				to='/cart'
				replace
			/>
		);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus('processing');

		setTimeout(() => {
			clearCart();
			setStatus('success');
		}, 1500);
	};

	if (status === 'success') {
		return (
			<div className='checkout-container'>
				<div className='checkout-success'>
					<div className='checkout-success__icon'>✓</div>
					<h1 className='checkout-heading'>Payment Successful</h1>
					<p className='checkout-success__text'>
						Thank you for your order! Your mock payment was processed successfully.
					</p>
					<Link
						to={`/category/${lastCategory}`}
						className='checkout-success__link'
					>
						Continue Shopping
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='checkout-container'>
			<h1 className='checkout-heading'>Checkout</h1>

			<div className='checkout-layout'>
				<form
					className='checkout-form'
					onSubmit={handleSubmit}
				>
					<h2 className='checkout-form__title'>Payment Details</h2>
					<p className='checkout-form__note'>This is a mock checkout — no real payment is processed.</p>

					<label className='checkout-form__label'>
						Name on Card
						<input
							type='text'
							name='cardName'
							className='checkout-form__input'
							placeholder='John Doe'
							value={formData.cardName}
							onChange={handleChange}
							required
						/>
					</label>

					<label className='checkout-form__label'>
						Card Number
						<input
							type='text'
							name='cardNumber'
							className='checkout-form__input'
							placeholder='1234 5678 9012 3456'
							value={formData.cardNumber}
							onChange={handleChange}
							maxLength={19}
							required
						/>
					</label>

					<div className='checkout-form__row'>
						<label className='checkout-form__label'>
							Expiry Date
							<input
								type='text'
								name='expiry'
								className='checkout-form__input'
								placeholder='MM/YY'
								value={formData.expiry}
								onChange={handleChange}
								maxLength={5}
								required
							/>
						</label>

						<label className='checkout-form__label'>
							CVV
							<input
								type='text'
								name='cvv'
								className='checkout-form__input'
								placeholder='123'
								value={formData.cvv}
								onChange={handleChange}
								maxLength={4}
								required
							/>
						</label>
					</div>

					<button
						type='submit'
						className='checkout-form__submit'
						disabled={status === 'processing'}
					>
						{status === 'processing' ? 'Processing...' : `Pay $${totalPrice}`}
					</button>
				</form>

				<aside className='checkout-summary'>
					<div className='checkout-summary__card'>
						<h2 className='checkout-summary__title'>Order Summary</h2>

						<ul className='checkout-summary__list'>
							{cartItems.map((item) => (
								<li
									key={item.id}
									className='checkout-summary__item'
								>
									<span className='checkout-summary__item-name'>
										{item.name} × {item.quantity}
									</span>
									<span className='checkout-summary__item-price'>${item.price * item.quantity}</span>
								</li>
							))}
						</ul>

						<div className='checkout-summary__row'>
							<span>Items</span>
							<span>{totalItems}</span>
						</div>

						<div className='checkout-summary__row checkout-summary__row--total'>
							<span>Total</span>
							<span className='checkout-summary__total'>${totalPrice}</span>
						</div>

						<Link
							to='/cart'
							className='checkout-summary__back'
						>
							Back to Cart
						</Link>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Checkout;
