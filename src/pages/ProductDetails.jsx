import React from 'react';
import { products } from '../data/data';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
	const { productID } = useParams();
	const { addToCart } = useCart();

	const product = products.find((product) => product.id === Number(productID));

	const renderStars = (rating) => {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;
		let stars = '';

		for (let i = 0; i < fullStars; i++) stars += '★';
		if (hasHalfStar) stars += '½';

		return stars;
	};

	if (!product) {
		return (
			<div className='products-container'>
				<h1 className='products-heading'>Product {productID}</h1>
				<div className='products-empty'>
					<div className='empty-icon'>📦</div>
					<p className='empty-text'>Product not found</p>
				</div>
			</div>
		);
	}

	return (
		<div className='product__wrapper'>
			{/* Left side */}
			<div className='wrapper-left'>
				<img
					src={product.img}
					alt={product.name}
					className='product-card__image-scaledown'
				/>
			</div>

			{/* Right side */}
			<div className='wrapper-right'>
				<div className='product-card__badges'>
					<span className='product-card__badge product-card__badge--rating'>{product.rating}★</span>
					<span
						className={`product-card__badge product-card__badge--stock ${
							!product.inStock ? 'out-of-stock' : ''
						}`}
					>
						{product.inStock ? 'In Stock' : 'Out'}
					</span>
				</div>

				<div className='product-card__content'>
					<div className='product-card__header'>
						<h3 className='product-card__name'>{product.name}</h3>
						<span className='product-card__price'>${product.price}</span>
					</div>

					<div className='product-card__rating'>
						<span className='stars'>{renderStars(product.rating)}</span>
						<span>({product.rating})</span>
					</div>

					<p className='product-card__description'>{product.description}</p>

					<div className='product-card__footer'>
						<span
							className={`product-card__stock-status ${
								product.inStock ?
									'product-card__stock-status--in-stock'
								:	'product-card__stock-status--out-of-stock'
							}`}
						>
							{product.inStock ? 'In Stock' : 'Out of Stock'}
						</span>
						{product.inStock && (
							<button
								type='button'
								className='product-card__cta'
								onClick={() => addToCart(product)}
							>
								Shop Now
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
