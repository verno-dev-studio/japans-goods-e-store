import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Outlet} from 'react-router-dom';

const layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default layout;
