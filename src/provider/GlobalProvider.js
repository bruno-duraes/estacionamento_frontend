import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export  const  GlobalProvider = (props) => {

    const initialState = [
        {
            plate: 'ABC-1234',
            owner: 'João Silva',
            apartmentNumber: '101',
            block: 'A',
            model: 'Honda Civic',
            color: 'Prata',
            parkingSpot: '1',
            reserved: true
        },
        {
            plate: 'XYZ-5678',
            owner: 'Maria Oliveira',
            apartmentNumber: '202',
            block: 'B',
            model: 'Toyota Corolla',
            color: 'Preto',
            parkingSpot: '2',
            reserved: true
        },
        {
            plate: 'DEF-9012',
            owner: 'Carlos Souza',
            apartmentNumber: '303',
            block: 'C',
            model: 'Ford Focus',
            color: 'Branco',
            parkingSpot: '3',
            reserved: true
        },
        ...Array.from({length:17}, (_,i) => ({
            parkingSpot: i+4,
            reserved: false
        }))
    ]

    const [reservations, setReservations] = useState(initialState);

    return(
        <GlobalContext.Provider value={{reservations, setReservations}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    return useContext(GlobalContext);
} 
