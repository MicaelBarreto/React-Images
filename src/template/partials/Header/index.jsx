import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './header.css';

const Header = () => (
    <div className='header'>
        <Link to='/'>
            <h1>IMAGES</h1>
        </Link>
    </div>
);

export default withRouter(Header);