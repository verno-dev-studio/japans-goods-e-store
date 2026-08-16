import { createContext, useState, useContext, useEffect } from 'react';
import { getLastCategory, setLastCategory as saveLastCategory } from '../utils/categoryStorage';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
	const [lastCategory, setLastCategory] = useState(getLastCategory());

	// Sync state to localStorage whenever it changes
	const updateCategory = (category) => {
		setLastCategory(category);
		saveLastCategory(category);
	};

	return <CategoryContext.Provider value={{ lastCategory, updateCategory }}>{children}</CategoryContext.Provider>;
};

// Custom hook for consuming the context
export const useCategory = () => {
	const context = useContext(CategoryContext);
	if (!context) {
		throw new Error('useCategory must be used within a CategoryProvider');
	}
	return context;
};
