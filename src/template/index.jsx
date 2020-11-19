import React from 'react';

import Header from './partials/Header';
import Footer from './partials/Footer';
import Page from './partials/Page';

import './template.css';

const Template = props => (
    <div className='template'>
        <Header />
        <Page {...props} />
        <Footer />
    </div>
);

export default Template;