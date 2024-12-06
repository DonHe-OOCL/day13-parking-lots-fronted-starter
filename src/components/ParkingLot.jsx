// src/components/ParkingLot.jsx
import React from 'react';
import ParkingLotOperator from './ParkingLotOperator';
import ParkingLotSlot from './ParkingLotSlot';

const ParkingLot = () => {
    return (
        <div>
            <ParkingLotOperator />
            <ParkingLotSlot />
        </div>
    );
};

export default ParkingLot;