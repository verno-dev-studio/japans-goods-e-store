export const sortProducts = (productArray, sortType, sortOrder = 'asc') => {
	return productArray.slice().sort((a, b) => {
		const aVal = a[sortType];
		const bVal = b[sortType];

		let comparison;
		if (typeof aVal === 'number' && typeof bVal === 'number') {
			comparison = aVal - bVal;
		} else {
			comparison = String(aVal).localeCompare(String(bVal));
		}

		return sortOrder === 'asc' ? comparison : -comparison;
	});
};
