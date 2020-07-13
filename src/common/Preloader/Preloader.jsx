import React from 'react';
import preloaderAnimation from '../../assets/images/preloader.svg';
import './Preloader.css';


export const Preloader = (props) => {
    return (
        <div className='preloaderPlane'>
            <img src={preloaderAnimation} alt="" />
        </div>
    )
}