import React from 'react';
import './Service.css'


const Service = ({ service }) => {

    const { name, img, description, price } = service;

    return (
        <div className='service p-1'>
            <img className='w-100' src={img} alt="" />
            <h2>This is Service: {name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;