import React from 'react';

import './page.css';

const Page = ({ page: Component}, anotherProps) => (
    <div className='page'>
        <Component {...anotherProps} />
    </div>
);

export default Page;