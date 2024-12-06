import React, { createContext, useReducer, useEffect } from 'react';
import { getParkingLots } from '../api/parking';

const ParkingContext = createContext();

const parkingReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PARKING_LOTS':
            return { ...state, parkingLots: action.payload };
        default:
            return state;
    }
};

const ParkingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(parkingReducer, { parkingLots: [] });

    useEffect(() => {
        const fetchParkingLots = async () => {
            try {
                const data = await getParkingLots();
                dispatch({ type: 'SET_PARKING_LOTS', payload: data });
            } catch (error) {
                console.error('Error fetching parking lots:', error);
            }
        };

        fetchParkingLots();
    }, []);

    return (
        <ParkingContext.Provider value={{ state, dispatch }}>
            {children}
        </ParkingContext.Provider>
    );
};

export { ParkingContext, ParkingProvider };