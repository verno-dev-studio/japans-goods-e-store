import React from 'react';
import { Link } from 'react-router-dom';
import { useCategory } from '../context/CategoryContext';

const NotFound = () => {
	const { lastCategory } = useCategory();

	return (
		<div className='not-found'>
			<div className='not-found__card'>
				<p className='not-found__code'>404</p>
				<h1 className='not-found__title'>Page Not Found</h1>
				<p className='not-found__text'>
					The page you are looking for does not exist or may have been moved. Let&apos;s get you back on
					track.
				</p>

				<div className='not-found__actions'>
					<Link
						to='/'
						className='not-found__link not-found__link--primary'
					>
						Go Home
					</Link>
					<Link
						to={`/category/${lastCategory}`}
						className='not-found__link'
					>
						Browse Categories
					</Link>
					<Link
						to='/cart'
						className='not-found__link'
					>
						View Cart
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
