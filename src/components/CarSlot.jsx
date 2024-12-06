import React from 'react';
import './css/CarSlot.css';

const CarSlot = ({ plateNumber }) => {
    return (
        <div className={`car-slot ${plateNumber ? 'occupied' : 'empty'}`}>
            {plateNumber}
        </div>
    );
};

export default CarSlot;