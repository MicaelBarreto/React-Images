import React from 'react';

import './footer.css';

const FooterLink = ({ linkName }) => {
    const link = linkName === 'github' ? '' : '';

    return <a href={link} target='_blank'> { linkName === 'github' ? 'Acessar Github' : 'Acessar Linkedin' } </a>;
};

export default FooterLink;