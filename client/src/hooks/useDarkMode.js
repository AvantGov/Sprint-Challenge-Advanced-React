// * hooks:
import { useLocalStorage } from "./useLocalStorage"
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [ darkModeSetting, setDarkModeSetting ] = useLocalStorage("darkmode");

    

    useEffect(() => {
        if (darkModeSetting === false) {
            document.body.classList.remove('dark-mode')
            document.body.classList.add('day-mode')
        } else {
            document.body.classList.remove('day-mode')
            document.body.classList.add('dark-mode')
        }
    })

    return [ darkModeSetting, setDarkModeSetting ];
}
