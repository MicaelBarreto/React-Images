import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './header.css';

const Header = () => (
    <div className='header'>
        <Link to='/'>Aqui</Link>
    </div>
);

export default withRouter(Header);