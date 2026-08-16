import { useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useCategory } from '../../context/CategoryContext';
import { useCart } from '../../context/CartContext';
import logo from '/logo.svg';

const Header = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// Raw input state (keeps exact user typing)
	const [rawInput, setRawInput] = useState(searchParams.get('productName') || '');
	const { lastCategory } = useCategory();
	const { totalItems } = useCart();

	const handleInputChange = (e) => {
		const raw = e.target.value;
		setRawInput(raw); // keep raw for display

		// Process for URL: trim + lowercase
		const processed = raw.trim().toLowerCase();
		setSearchParams({ productName: processed });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const raw = e.target.value;
		setRawInput('');

		const processed = raw.trim().toLowerCase();
		setSearchParams({ productName: processed });
	};

	return (
		<header className='header'>
			<div className='header__container__logo'>
				<img
					src={logo}
					alt='Logo'
					className='logo__icon'
				/>
				<h1 className='logo__text'>{`Japan's goods`}</h1>
			</div>

			{/* Search bar */}
			<form
				className='search-form'
				onSubmit={handleSubmit}
			>
				<input
					type='text'
					placeholder='Search products...'
					className='search-input'
					value={rawInput} // uses raw input, not processed
					onChange={handleInputChange}
				/>
				<button
					type='submit'
					className='search-button'
					aria-label='Search'
				>
					🔍
				</button>
			</form>

			<nav className='navbar'>
				<ul className='nav-menu'>
					<li className='nav-item'>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
						>
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to={`/category/${lastCategory}`}
							className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
						>
							Categories
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to='/cart'
							className={({ isActive }) =>
								isActive ? 'nav-link nav-link--cart active' : 'nav-link nav-link--cart'
							}
						>
							<span className='nav-link__text'>Cart</span>
							{totalItems > 0 && <span className='nav-link__badge'>{totalItems}</span>}
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink
							to='/about'
							className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
						>
							About
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
