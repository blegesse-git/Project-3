/* eslint-disable no-throw-literal */
import axios from 'axios';
 
// const CONFIG = {
//   apiUrl: process.env.BACKEND_URL || 'https://serene-citadel-52952.herokuapp.com/',
// };

const EventsService = {
  getEvents: async () => {
    const response = await axios.get(`api/events`);
    return await response.data;
  },
  addGuest: async (eventId, name, email) => {
    const nameSeparated = name.split(' ')
    return axios.put(
        `api/events/${eventId}/guests`,
        {
          firstName: nameSeparated[0], 
          lastName: nameSeparated.length > 1 ? nameSeparated[1] : '',
          email, 
          isAttending: false,
        },
      )
      .then((response) => response)
      .catch((error) => {
        console.log('ERROR', error);
        throw 'New guest could not be saved';
      });
  },
  confirmGuestAttendance: (guestId) => {
    return fetch(`https://powerful-fortress-17827.herokuapp.com/api/events/guests/${guestId}/confirmation`);
  },
  addTransaction: async (eventId, description, amount) => {
    return axios.put(
        `api/events/${eventId}/transactions`,
        {
          description,
          amount,
        },
      )
      .then((response) => response)
      .catch((error) => {
        console.log('ERROR', error);
        throw 'New transaction could not be saved';
      });
  },
  addToDo:  (eventId, description) => {
    console.log(description)
    console.log(eventId)
    return axios.put(
        `api/events/${eventId}/todo`,
        {
          description
          
        },
      )
      .then((response) => response )
    
      .catch((error) => {
        console.log('ERROR', error);
        throw 'New todo could not be saved';
      });
  },
  deleteEvent: (eventId) => {
    return axios.delete(`api/events/${eventId}`);
  },
};

export default EventsService;
