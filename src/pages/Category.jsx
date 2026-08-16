import React, { useEffect, useState } from 'react';
import { products } from '../data/data';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useCategory } from '../context/CategoryContext';
import { useCart } from '../context/CartContext';
import { renderStars } from '../utils/renderStars';
import { sortProducts } from '../utils/sortProducts';

const Category = () => {
	const { categoryID } = useParams(); // route: '/category/:categoryName'
	const [searchParams, setSearchParams] = useSearchParams();
	const { updateCategory } = useCategory();
	const { addToCart } = useCart();
	const [sortType, setSortType] = useState('price'); // * price, id, name, rating, inStock
	const [sortOrder, setSortOrder] = useState('asc'); // * 'asc' or 'desc'

	const maxPrice = searchParams.get('maxPrice') ? searchParams.get('maxPrice') : Infinity;
	const minPrice = searchParams.get('minPrice') ? searchParams.get('minPrice') : -Infinity;
	const productName = searchParams.get('productName') ? searchParams.get('productName') : 'none';

	// Update the stored last category whenever the URL category changes
	useEffect(() => {
		if (categoryID) {
			updateCategory(categoryID);
		}
	}, [categoryID, updateCategory]);

	// Filtering products
	let currentCategoryArray = [];

	if (productName !== 'none') {
		currentCategoryArray = products.filter((product) => product.name.toLocaleLowerCase() === productName);
	} else {
		currentCategoryArray = products.filter(
			(product) =>
				product.categoryId.toLocaleLowerCase() === categoryID &&
				product.price <= maxPrice &&
				product.price >= minPrice,
		);
	}

	const toggleSortOrder = () => {
		setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
	};

	const handleChange = (e) => {
		setSearchParams((prev) => ({
			...Object.fromEntries(prev),
			[e.target.id]: e.target.value,
		}));
	};

	const sortedProducts = sortProducts(currentCategoryArray, sortType, sortOrder);

	return (
		<div className='products-container'>
			<h1 className='products-heading'>Category {categoryID}</h1>
			{/* Sorting */}
			<p>
				<strong>Sort by:</strong>
			</p>
			<div className='sort-controls'>
				<select
					value={sortType}
					onChange={(e) => setSortType(e.target.value)}
					className='sort-select'
				>
					<option value='price'>Price</option>
					<option value='id'>ID</option>
					<option value='name'>Name</option>
					<option value='rating'>Rating</option>
					<option value='inStock'>In Stock</option>
				</select>

				<button
					onClick={toggleSortOrder}
					className='sort-order-button'
				>
					{sortOrder === 'asc' ? '↑ Ascending' : '↓ Descending'}
				</button>

				<input
					type='number'
					id='minPrice'
					placeholder='Min price'
					className='sort-input'
					onChange={handleChange}
				></input>
				<input
					type='number'
					id='maxPrice'
					placeholder='Max price'
					className='sort-input'
					onChange={handleChange}
				></input>
			</div>

			{/* Products */}
			{currentCategoryArray.length === 0 && (
				<div className='products-empty'>
					<div className='empty-icon'>📦</div>
					<p className='empty-text'>No products found in this category</p>
				</div>
			)}

			<ul
				className='products-grid'
				style={{ listStyle: 'none', padding: 0, margin: 0 }}
			>
				{sortedProducts.map((product) => (
					<li
						key={product.id}
						className='product-card'
					>
						<Link
							to={`/product/${product.id}`}
							className='product-card__link'
						>
							{/* Badges */}
							<div className='product-card__badges'>
								<span className={`product-card__badge product-card__badge--rating`}>
									{product.rating}★
								</span>
								<span
									className={`product-card__badge product-card__badge--stock ${!product.inStock ? 'out-of-stock' : ''}`}
								>
									{product.inStock ? 'In Stock' : 'Out'}
								</span>
							</div>

							{/* Product Image */}
							<div className='product-card__image-wrapper'>
								<img
									src={product.img}
									alt={product.name}
									className='product-card__image'
								/>
								<div className='product-card__overlay'>
									<span className='product-card__overlay-text'>View Details</span>
								</div>
							</div>

							{/* Product Info */}
							<div className='product-card__content'>
								<div className='product-card__header'>
									<h3 className='product-card__name'>{product.name}</h3>
									<span className='product-card__price'>${product.price}</span>
								</div>

								{/* Rating */}
								<div className='product-card__rating'>
									<span className='stars'>{renderStars(product.rating)}</span>
									<span>({product.rating})</span>
								</div>

								{/* Description */}
								<p className='product-card__description'>{product.description}</p>

								{/* Footer with Stock Status */}
								<div className='product-card__footer'>
									<span
										className={`product-card__stock-status ${product.inStock ? 'product-card__stock-status--in-stock' : 'product-card__stock-status--out-of-stock'}`}
									>
										{product.inStock ? 'In Stock' : 'Out of Stock'}
									</span>
									{product.inStock && (
										<button
											type='button'
											className='product-card__cta'
											onClick={(e) => {
												e.preventDefault();
												e.stopPropagation();
												addToCart(product);
											}}
										>
											Shop Now
										</button>
									)}
								</div>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Category;
