import React, { useState, useEffect, useRef } from 'react';

import Navigation from '../navigation';

import './pagination.css';

const Pagination = props => {
    const [page, setPage] = useState();
    const [perPage, setPerPage] = useState();
    const [totalPages, setTotalPages] = useState(1);
    const loaded = useRef(false);

    const perPageChoices = [20, 40, 100];

    useEffect(() => setPerPage(typeof props.initialPerPage !== 'undefined' ? props.initialPerPage : perPageChoices[0]), []);

    useEffect(() => {
        setTotalPages(Math.ceil( props.data.length/perPage ));

        if(!loaded.current) {
            setPage(typeof props.initialPage !== 'undefined' ? props.initialPage : 1);
            loaded.current = true;
        }
    }, [perPage]);

    useEffect(() => {
        const data = props.data.slice((page-1) * perPage, page * perPage);
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