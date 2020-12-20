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



export const InvoiceContext = createContext({});

export const InvoiceProvider = ({ children }) => {
    const [invoices, setInvoices] = useState(initialState);

    function addInvoice(newInvoice) {

        setInvoices([...invoices, newInvoice])
    }

    function replaceAllInvoices(invoices) {
        setInvoices(invoices);
    }

    return (
        <InvoiceContext.Provider value={{
            invoices,
            addInvoice,
            replaceAllInvoices
        }}>
            {children}
        </InvoiceContext.Provider>)

}