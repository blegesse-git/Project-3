import axios from 'axios';

export default {

    createEvent: function(data){
        //console.log("this is util API page");
        console.log(data);
        return axios.post("api/events", data);
    },
    lookEvent: function(){
        //console.log("this is util API page");
        // console.log(data);
        return axios.get("api/events").then(result => result.data);
        
    },

    invoiceForm: function(data){
        console.log("this is util API page");
        console.log(data);
        return axios.post("api/invoices", data);
    }

}