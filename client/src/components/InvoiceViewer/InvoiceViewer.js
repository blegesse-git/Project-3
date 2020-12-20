import React from "react"
import InvoiceList from "../InvoiceList/InvoiceList"

function InvoiceViewer(props){

    return(
        <div>
            {props.invoices.map(invoice =>(
                <InvoiceList key={invoice.id} invoice={invoice} />
            ))}
        </div>
    )
}

export default InvoiceViewer;