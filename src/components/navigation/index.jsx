import React from 'react';

import NavigationBar from './NavigationBar';
import NavigationPerPage from './NavigationPerPage';

import './navigation.css';

const Navigation = props => (
    <div className='navigation'>
        <div className='navigation-bar'>
            <NavigationBar {...props} />
        </div>
        <div className='navigation-per-page'>
            <NavigationPerPage {...props} />
        </div>
    </div>
);

export default Navigation;