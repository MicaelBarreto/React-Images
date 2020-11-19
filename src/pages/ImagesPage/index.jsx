import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import ImageCard from '../../components/image-card';
import Pagination from '../../components/pagination';

import './images-page.css';

const ImagesPage = props => {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='images-page'>
            <div className='images'>
                {images.map(image => <ImageCard image={image} />)}
            </div>
            <div className='pagination'>
                <Pagination 
                    data={data} 
                    setContent={setImages} 
                    // initialPage={typeof props.location.state.page !== 'undefined' ? props.location.state.page : null} 
                    // initialPerPage={typeof props.location.state.perPage !== 'undefined' ? props.location.state.perPage : null} 
                />
            </div>
        </div>
    );
};

export default withRouter(ImagesPage);