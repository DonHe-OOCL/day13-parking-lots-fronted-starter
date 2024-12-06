import React, { useState } from 'react';
import './css/ParkingLotOperator.css';

const ParkingLotOperator = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [parkingStrategy, setParkingStrategy] = useState('Standard');

    const handlePark = () => {
        console.log(`Plate Number: ${plateNumber}, Parking Strategy: ${parkingStrategy}`);
    };

    const handleFetch = () => {
        console.log(`Plate Number: ${plateNumber}`);
    };

    return (
        <div className="parking-lot-operator">
            <div className="parking-lot-operator-element">
                <label>
                    Plate Number:
                    <input
                        type="text"
                        value={plateNumber}
                        onChange={(e) => setPlateNumber(e.target.value)}
                        style={{ marginLeft: '5px' }}
                    />
                </label>
            </div>
            <div className="parking-lot-operator-element">
                <label>
                    Parking Strategy:
                    <select
                        value={parkingStrategy}
                        onChange={(e) => setParkingStrategy(e.target.value)}
                        style={{ marginLeft: '5px' }}
                    >
                        <option value="Standard">Standard</option>
                        <option value="Smart">Smart</option>
                        <option value="SuperSmart">SuperSmart</option>
                    </select>
                </label>
            </div>
            <div className="parking-lot-operator-element">
                <button
                    onClick={handlePark}
                    className="parking-lot-operator-button"
                >
                    Park
                </button>
            </div>
            <div className="parking-lot-operator-element">
                <button
                    onClick={handleFetch}
                    className="parking-lot-operator-button"
                >
                    Fetch
                </button>
            </div>
        </div>
    );
};

export default ParkingLotOperator;