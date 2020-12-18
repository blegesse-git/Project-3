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
    return axios.get(`http://localhost:3000/api/events/guests/${guestId}/confirmation`);
  },
};

export default EventsService;
