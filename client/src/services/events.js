/* eslint-disable no-throw-literal */
import axios from 'axios';
 
// const CONFIG = {
//   apiUrl: process.env.BACKEND_URL || 'https://serene-citadel-52952.herokuapp.com/',
// };

const EventsService = {
  getEvents: async () => {
    const response = await axios.get(`api/events`);
    console.log(response)
    return await response.data;
  },
  addGuest: async (eventId, name, email) => {
    return axios.put(
        `api/events/${eventId}`,
        {
            name, email, isAttending: false,
        },
      )
      .then((response) => response)
      .catch((error) => {
        console.log('ERROR', error);
        throw 'New guest could not be saved';
      });
  },
};

export default EventsService;
