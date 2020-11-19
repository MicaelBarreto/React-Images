import React from 'react';

import './navigation-per-page.css';

const NavigationPerPage = ({ perPageChoices, setPerPage }) => (
    <div className='navigation-per-page'>
        <select onChange={setPerPage}>
            {perPageChoices.map(choice => <option value={choice}>{choice}</option>)}
        </select>
    </div>
);

export default NavigationPerPage;