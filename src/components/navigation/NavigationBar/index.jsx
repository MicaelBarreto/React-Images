import React from 'react';

import './navigation-bar.css';

const NavigationBar = ({ page, totalPages, ...props }) => {
    
    const renderButtons = () => {
        console.log(totalPages)
        if(page === 1 && page+1 == totalPages) 
            return (
                <>
                    <button className='highlited-button' onClick={() => props.setPage(1)}>1</button>
                    <button onClick={() => props.setPage(2)}>2</button>
                    <button className='arrow-button' onClick={() => props.setPage(2)}>{'>'}</button>
                </>
            );

        if(page === 1 && page+1 < totalPages) 
            return (
                <>
                    <button className='highlited-button' onClick={() => props.setPage(page)}>{page}</button>
                    <button onClick={() => props.setPage(page + 1)}>{page + 1}</button>
                    <button onClick={() => props.setPage(page + 2)}>{page + 2}</button>
                    <button className='arrow-button' onClick={() => props.setPage(page + 1)}>{'>'}</button>
                </>
            );

        if(page > 1 && page+1 <= totalPages)
            return (
                <>
                    <button className='arrow-button' onClick={() => props.setPage(page - 1)}>{'<'}</button>
                    <button onClick={() => props.setPage(page - 1)}>{page - 1}</button>
                    <button className='highlited-button' onClick={() => props.setPage(page)}>{page}</button>
                    <button onClick={() => props.setPage(page + 1)}>{page + 1}</button>
                    <button className='arrow-button' onClick={() => props.setPage(page + 1)}>{'>'}</button>
                </>
            );

        if(page > 1 && page === totalPages && totalPages === 2)
            return (
                <>
                    <button className='arrow-button' onClick={() => props.setPage(page - 1)}>{'<'}</button>
                    <button onClick={() => props.setPage(page - 1)}>{page - 1}</button>
                    <button className='highlited-button' onClick={() => props.setPage(page)}>{page}</button>
                </>
            );
                
        if (page > 1 && page === totalPages)
            return (
                <>
                    <button className='arrow-button' onClick={() => props.setPage(page - 1)}>{'<'}</button>
                    <button onClick={() => props.setPage(page - 2)}>{page - 2}</button>
                    <button onClick={() => props.setPage(page - 1)}>{page - 1}</button>
                    <button className='highlited-button' onClick={() => props.setPage(page)}>{page}</button>
                </>
            );

        return <button className='highlited-button' onClick={() => props.setPage(1)}>1</button>;
    }

    return (
        <div className='navigation-bar'>
            {renderButtons()}
        </div>
    );
};

export default NavigationBar;