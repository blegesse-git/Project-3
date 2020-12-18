/* eslint-disable no-throw-literal */
const CONFIG = {
  apiUrl: process.env.BACKEND_URL || 'https://serene-citadel-52952.herokuapp.com/',
};

const EventsService = {
  getEvents: async () => {
    const response = await fetch(`${CONFIG.apiUrl}api/events`);
    return await response.json();
  },
  addGuest: async (eventId, name, email) => {
    return fetch(
        `${CONFIG.apiUrl}api/events/${eventId}`,
        {
          method: 'PUT',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name, email, isAttending: false,
          }),
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
