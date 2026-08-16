const STORAGE_KEY = 'lastCategory';

export const getLastCategory = () => {
	const stored = localStorage.getItem(STORAGE_KEY);
	return stored || 'electronics';
};

export const setLastCategory = (category) => {
	localStorage.setItem(STORAGE_KEY, category);
};
