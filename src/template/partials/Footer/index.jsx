import React from 'react';

import FooterFile from '../../../components/footer/FooterFile';
import FooterLink from '../../../components/footer/FooterLink';

import './footer.css';

const Footer = () => (
    <footer>
        <div className='footer-content'>
            <FooterFile file='curriculum' />
            <FooterFile file='resume' />
            <FooterLink linkName='github' />
            <FooterLink linkName='linkedin' />
        </div>
        <p>Desenvolvido por Micael Moraes</p>
    </footer>
);

export default Footer;