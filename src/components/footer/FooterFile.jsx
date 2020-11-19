import React from 'react';

import './footer.css';

const FooterFile = ({ file }) => 
    <a href={`../../assets/files/${file}.pdf`} target='_blank'> { file === 'curriculum' ? 'Baixar Currículum' : 'Baixar Resume' } </a>

export default FooterFile;