import React, { useState, useEffect } from 'react';

import Navigation from '../navigation';

import './pagination.css';

const Pagination = props => {
    const [page, setPage] = useState();
    const [perPage, setPerPage] = useState();
    const [totalPages, setTotalPages] = useState(1);

    const perPageChoices = [10, 20, 30, 40, 50, 100];

    useEffect(() => {
        setPage(typeof props.initialPage !== 'undefined' ? props.initialPage : 1);
        setPerPage(typeof props.initialPerPage !== 'undefined' ? props.initialPerPage : perPageChoices[0]);
        setTotalPages(Math.ceil( props.data.lenght/perPage ))
    }, []);

    useEffect(() => {
        console.log(props)
        const data = props.data.slice((page-1) * perPage, ((page * perPage) - 1));
        props.setContent(data);
    }, [page]);

    return (
        <div className='pagination'>
            <Navigation 
                page={page} 
                setPage={setPage} 
                perPage={perPage} 
                setPerPage={setPerPage} 
                totalPages={totalPages} 
                perPageChoices={perPageChoices} />
        </div>
    );
};

export default Pagination;