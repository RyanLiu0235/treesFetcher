export const saveLocalItem = (key, value) => {
	localStorage.setItem(key, value);
}

export const getLocalItem = (key) => {
	return localStorage.getItem(key);
}