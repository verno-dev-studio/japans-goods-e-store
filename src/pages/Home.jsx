import { Link, NavLink } from 'react-router-dom';
import { categories } from '../data/data';
import '../sass/pages/Home.sass';

const Home = () => {
	return (
		<div className='home'>
			<h1 className='home__heading'>Categories</h1>
			<ul className='categories-grid'>
				{categories.map((category) => (
					<li key={category.id}>
						<Link
							to={`/category/${category.id.toLocaleLowerCase()}`}
							className='category-card__link'
						>
							<article className='category-card'>
								<div className='category-card__image-wrapper'>
									<img
										src={category.img}
										alt={category.name.toLocaleLowerCase()}
										className='category-card__image'
									/>
									<div className='category-card__overlay'>
										<span className='category-card__overlay-text'>Explore</span>
									</div>
								</div>
								<div className='category-card__content'>
									<h2 className='category-card__name'>{category.name}</h2>
								</div>
							</article>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
