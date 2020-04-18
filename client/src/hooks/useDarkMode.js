// * hooks:
import { useLocalStorage } from "./useLocalStorage"
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [ darkModeSetting, setDarkModeSetting ] = useLocalStorage("darkmode");

    const header = document.find(".header-container")

    useEffect(() => {
        if (darkModeSetting === true) {
            header.classList.add(".dark-mode")
        }
    })
}
