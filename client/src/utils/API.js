import axios from 'axios';

export default {

    createEvent: function(data){
        //console.log("this is util API page");
        console.log(data);
        return axios.post("api/events", data);
    },
    getEvents: function() {
        return axios.get("api/events").then(result=> res.json(result))
    },
    createToDo: function(data){
        //console.log("this is util API page");
        console.log(data);
        return axios.post("api/todo", data);
    },
    updateEvent: function(data, id){
        return axios.put("api/events/" + id, data)
    },
   

    getAllEvents: function(){
        return axios.get("api/events")
    },

    invoiceForm: function(data){
        console.log("this is util API page");
        console.log(data);
        return axios.post("api/invoices", data);
    },
   

    getAllInvoices: function(){
        return axios.get("api/invoices")
    },

}