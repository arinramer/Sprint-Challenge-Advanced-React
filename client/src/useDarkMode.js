import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = key => {
    const [storedValue, setStoredValue] = useLocalStorage(key);
    const body = document.querySelector('body');
    useEffect(() => {
        if(storedValue) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    },[storedValue, body.classList])
    return [storedValue, setStoredValue];
}

export default useDarkMode;