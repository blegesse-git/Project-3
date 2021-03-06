import React, { createContext, useState} from 'react';

export const VenueContext = createContext();

const VenueContextProvider = (props) => {
    const [name, setName] =  useState("")
    const [phone, setPhone] =  useState("")
    const [website, setWebsite] =  useState("")
    const [address, setAddress] =  useState("")
    const [time, setTime] =  useState("")
    const [info, setInfo] = useState({})
        

    
    

    return (
        <VenueContext.Provider value={{
            venueName: [name, setName], 
            venuePhone: [phone, setPhone], 
            venueWebsite: [website, setWebsite], 
            venueAddress: [address, setAddress],
            venueTime: [time, setTime],
            venueInfo: [info, setInfo]}}>

            {props.children}
        </VenueContext.Provider>
    )
};

export default VenueContextProvider