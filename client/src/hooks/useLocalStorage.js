import { useState } from 'react';

export const useLocalStorage = ( key, initialValue ) => {
    // * retrieve item from local storage by keyname:
    const [ storedValue, setStoredValue ] = useState(() => {

        // * get item from local storage by key:
        const item = window.localStorage.getItem(key)

        // * parse and return stored JSON, or (if undefined) return the initial vsalue
        return item ? JSON.parse(item) : initialValue
    })

    const setValue = (value) => {
        // * saves the value to state:
        setStoredValue(value);

        // * saves the value to localstorage w/ key: value pair from input: 
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue]
}
