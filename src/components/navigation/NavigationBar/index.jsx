import React from 'react';

import './navigation-bar.css';

const NavigationBar = ({ page, totalPages }, props) => {

    const renderButtons = () => {
        switch(true) {
            default:
                return <button className='highlited-button' onClick={props.setPage(1)}>1</button>;

            case page === 1 && page+2 > totalPages && page+1 == totalPages:
                return (
                    <>
                        <button className='highlited-button' onClick={props.setPage(1)}>1</button>
                        <button onClick={props.setPage(2)}>2</button>
                        <button onClick={props.setPage(2)}>{'>'}</button>
                    </>
                );

            case page > 1 && page+1 <= totalPages:
                return (
                    <>
                        <button onClick={props.setPage(page - 1)}>{'<'}</button>
                        <button onClick={props.setPage(page - 1)}>{page - 1}</button>
                        <button className='highlited-button' onClick={props.setPage(page)}>{page}</button>
                        <button onClick={props.setPage(page + 1)}>{page + 1}</button>
                        <button onClick={props.setPage(page + 1)}>{'>'}</button>
                    </>
                );

            case page > 1 && page === totalPages && totalPages === 2:
                return (
                    <>
                        <button onClick={props.setPage(page - 1)}>{'<'}</button>
                        <button onClick={props.setPage(page - 1)}>{page - 1}</button>
                        <button className='highlited-button' onClick={props.setPage(page)}>{page}</button>
                    </>
                );
                    
            case page > 1 && page === totalPages:
                return (
                    <>
                        <button onClick={props.setPage(page - 1)}>{'<'}</button>
                        <button onClick={props.setPage(page - 2)}>{page - 2}</button>
                        <button onClick={props.setPage(page - 1)}>{page - 1}</button>
                        <button className='highlited-button' onClick={props.setPage(page)}>{page}</button>
                    </>
                );
        }
    }

    return (
        <div className='navigation-bar'>
            {renderButtons}
        </div>
    );
};

export default NavigationBar;