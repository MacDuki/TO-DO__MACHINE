import React from "react";

function useLocalStorage(itemName, initialValue) {
	const localStorageItem = localStorage.getItem(itemName);
	let parsedItem;

	if (!localStorageItem) {
		localStorage.setItem(itemName, JSON.stringify(initialValue));
		parsedItem = initialValue;
	} else {
		parsedItem = JSON.parse(localStorageItem);
	}

	const [item, setItem] = React.useState(parsedItem);

	const saveLocalStorage = (uptdatedItems) => {
		localStorage.setItem(itemName, JSON.stringify(uptdatedItems));
		setItem(uptdatedItems);
	};

	return [item, saveLocalStorage];
}

export { useLocalStorage };
