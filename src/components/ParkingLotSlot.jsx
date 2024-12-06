import React from 'react';
import CarSlot from './CarSlot';
import './css/ParkingLotSlot.css';

const ParkingLotSlot = () => {
    const parkingLots = [
        { name: 'The Plaza Park', capacity: 9, cars: ['AB-1123', 'DE-1456', null, null, null, null, null, null, null] },
        { name: 'City Mall Garage', capacity: 12, cars: ['GH-1789', null, 'JK-1012', null, null, null, 'MN-9345', null, null, null, null, null] },
        { name: 'Office Tower Parking', capacity: 9, cars: [null, null, null, null, null, null, null, null, null] }
    ];

    const renderTable = (cars, columns) => {
        const rows = [];
        for (let i = 0; i < cars.length; i += columns) {
            rows.push(cars.slice(i, i + columns));
        }
        return (
            <table className="parking-lot-table">
                <tbody>
                {rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((car, colIndex) => (
                            <td key={colIndex} className="parking-lot-cell">
                                {car ? <CarSlot plateNumber={car} /> : ''}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="parking-lot-container">
            {parkingLots.map((lot, index) => {
                const columns = Math.ceil(Math.sqrt(lot.capacity));
                return (
                    <div key={index} className="parking-lot">
                        {renderTable(lot.cars, columns)}
                        <div>{lot.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default ParkingLotSlot;