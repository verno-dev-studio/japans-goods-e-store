import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				{/* Brand Section */}
				<div className='footer__section footer__brand'>
					<h3 className='footer__title'>{`Japan's Goods`}</h3>
					<p className='footer__description'>
						Bringing authentic Japanese craftsmanship and tradition to your home.
					</p>
					<div className='footer__social'>
						<a
							href='#'
							className='social-link'
							aria-label='Facebook'
						>
							f
						</a>
						<a
							href='#'
							className='social-link'
							aria-label='Twitter'
						>
							𝕏
						</a>
						<a
							href='#'
							className='social-link'
							aria-label='Instagram'
						>
							📷
						</a>
					</div>
				</div>

				{/* Quick Links */}
				<div className='footer__section'>
					<h4 className='footer__heading'>Quick Links</h4>
					<ul className='footer__links'>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/categories'>Categories</a>
						</li>
						<li>
							<a href='/about'>About Us</a>
						</li>
						<li>
							<a href='/contact'>Contact</a>
						</li>
					</ul>
				</div>

				{/* Customer Service */}
				<div className='footer__section'>
					<h4 className='footer__heading'>Customer Service</h4>
					<ul className='footer__links'>
						<li>
							<a href='#'>Shipping Info</a>
						</li>
						<li>
							<a href='#'>Returns</a>
						</li>
						<li>
							<a href='#'>FAQ</a>
						</li>
						<li>
							<a href='#'>Track Order</a>
						</li>
					</ul>
				</div>

				{/* Contact Info */}
				<div className='footer__section footer__contact'>
					<h4 className='footer__heading'>Get in Touch</h4>
					<div className='contact-item'>
						<span className='label'>Email:</span>
						<a href='mailto:info@japansgoods.com'>info@japansgoods.com</a>
					</div>
					<div className='contact-item'>
						<span className='label'>Phone:</span>
						<a href='tel:+1234567890'>+1 (234) 567-890</a>
					</div>
					<div className='contact-item'>
						<span className='label'>Hours:</span>
						<p>Mon - Fri: 9:00 AM - 6:00 PM</p>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className='footer__bottom'>
				<p className='copyright'>&copy; 2026 {`Japan's Goods`}. All rights reserved.</p>
				<div className='footer__legal'>
					<a href='#'>Privacy Policy</a>
					<a href='#'>Terms of Service</a>
					<a href='#'>Cookie Policy</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
