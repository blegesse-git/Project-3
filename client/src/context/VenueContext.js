import React, { createContext, useState} from 'react';

export const VenueContext = createContext();

const VenueContextProvider = (props) => {
    const [name, setName] =  useState("")
    const [phone, setPhone] =  useState("")
    const [website, setWebsite] =  useState("")
    const [address, setAddress] =  useState("")
    const [note, setNote] =  useState("")
        

    
    

    return (
        <VenueContext.Provider value={{
            venueName: [name, setName], 
            venuePhone: [phone, setPhone], 
            venueWebsite: [website, setWebsite], 
            venueAddress: [address, setAddress],
            venueNote: [note, setNote]}}>

            {props.children}
        </VenueContext.Provider>
    )
};

export default VenueContextProvider