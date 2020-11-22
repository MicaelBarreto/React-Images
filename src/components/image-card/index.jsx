import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import './image-card.css';

const redirectToImage = imageId => {
    console.log('entrou');
};

const ImageCard = ({ image }) => (
    <div className='image-card' onClick={() => redirectToImage(image.id)}>
        <img src={image.thumbnailUrl} alt=""/>
        <p>{image.title}</p>
    </div>
);

export default withRouter(ImageCard);