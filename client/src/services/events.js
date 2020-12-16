

import DATA from './fakeData';

const EventsService = {
  getEvents: () => {
    return DATA;
  },
  addGuest: (eventId, name, email) => {
    return true;
  },
};

export default EventsService;
