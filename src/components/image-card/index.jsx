import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './image-card.css';

const ImageCard = ({ image }) => (
    <Link to={`/${image.id}`}>
        <img src={image.ImageCard} alt=""/>
        <p>{image.title}</p>
    </Link>
);

export default withRouter(ImageCard);