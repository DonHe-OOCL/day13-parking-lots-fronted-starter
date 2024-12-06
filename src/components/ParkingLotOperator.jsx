import React, { useState, useEffect } from 'react';
import { getParkingStrategy } from '../api/parking';
import './css/ParkingLotOperator.css';

const ParkingLotOperator = () => {
    const [plateNumber, setPlateNumber] = useState('');
    const [parkingStrategy, setParkingStrategy] = useState('Standard');
    const [strategies, setStrategies] = useState([]);

    useEffect(() => {
        const fetchStrategies = async () => {
            try {
                const data = await getParkingStrategy();
                setStrategies(data);
            } catch (error) {
                console.error('Error fetching parking strategies:', error);
            }
        };

        fetchStrategies();
    }, []);

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
                        {strategies.map((strategy) => (
                            <option key={strategy} value={strategy}>
                                {strategy}
                            </option>
                        ))}
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