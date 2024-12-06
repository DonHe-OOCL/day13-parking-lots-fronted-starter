import React from 'react';

const CarSlot = ({ plateNumber }) => {
    return (
        <div style={{
            backgroundColor: plateNumber ? '#b0f2b8' : '#fff',
            borderRadius: '5px',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid black',
            whiteSpace: 'nowrap'
        }}>
            {plateNumber}
        </div>
    );
};

export default CarSlot;