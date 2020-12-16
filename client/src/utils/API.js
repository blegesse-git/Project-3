import axios from 'axios';

export default {

    createEvent: function(data){
        //console.log("this is util API page");
        console.log(data);
        return axios.post("api/events", data);
    },

    getAllEvents: function(){
        return axios.get("api/events")
    },

    invoiceForm: function(data){
        console.log("this is util API page");
        console.log(data);
        return axios.post("api/invoices", data);
    }

}