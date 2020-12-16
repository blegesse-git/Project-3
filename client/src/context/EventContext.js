import React, { createContext, useState } from 'react';
import AppReducer from './AppReducer'

const initialState = [
        // {
        //     _id: 1,
        //     eventName: "Event 1",
        //     firstName: "Lisa",
        //     lastName: "Worsham"
        // },
        // {
        //     _id: 2,
        //     eventName: "Event 2",
        //     firstName: "Lisa",
        //     lastName: "Worsham"
        // },
        // {
        //     _id: 3,
        //     eventName: "Event 3",
        //     firstName: "Lisa",
        //     lastName: "Worsham"
        // },
        // {
        //     _id: 4,
        //     eventName: "Event 4",
        //     firstName: "Lisa",
        //     lastName: "Worsham"
        // }
    ]



export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
    const [events, setEvents] = useState(initialState);

    function addEvent(newEvent) {

        setEvents([...events, newEvent])
    }

    function replaceAllEvents(events) {
        setEvents(events);
    }

    return (
        <EventContext.Provider value={{
            events,
            addEvent,
            replaceAllEvents
        }}>
            {children}
        </EventContext.Provider>)

}