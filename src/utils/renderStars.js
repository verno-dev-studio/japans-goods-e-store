export const renderStars = (rating) => {
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	let stars = '';

	for (let i = 0; i < fullStars; i++) stars += '★';
	if (hasHalfStar) stars += '☆½';

	return stars;
};
