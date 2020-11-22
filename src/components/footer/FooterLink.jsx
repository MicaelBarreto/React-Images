import React from 'react';

import './footer.css';

const FooterLink = ({ linkName }) => {
    const link = linkName === 'github' ? 'https://github.com/MicaelBarreto' : 'https://www.linkedin.com/in/micael-moraes-1538a8185/';

    return <a href={link} target='_blank'> { linkName === 'github' ? 'Acessar Github' : 'Acessar Linkedin' } </a>;
};

export default FooterLink;