import React from 'react';
import useDarkMode from './useDarkMode';

const Cardlist = props => {
    const [storedValue, setValue] = useDarkMode();
    const toggleMode = e => {
        e.preventDefault();
        setValue(!storedValue);
    }
    return (
        <div aria-label="container">
            <button aria-label="button" onClick={toggleMode}>Toggle Dark Mode</button>
            <div aria-label="props">
                {props ? 'true' : 'false'}
            </div>
            {props.people.map(person => {
                return <p label="card" key={person.id}>{person.name}<br/>{person.country}<br/>{person.searches}</p>
            })}
        </div>
    )
}

export default Cardlist;