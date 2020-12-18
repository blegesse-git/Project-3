import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Paper from '@material-ui/core/Paper';
import EventsService from '../../services/events';
import SelectEvent from './select-event';
import AddGuests from './add-guests';
import Container from "../../components/Container/index"
import EventTabs from "../../components/Navbar/EventTabs"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function RSVP(props) {
  // The first commit of Material-UI
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [events, setEvents] = React.useState([]);
  const [selectedEvent, selectEvent] = React.useState({});

  const fetchData = async () => {
    const fetchedEvents = await EventsService.getEvents();
    setEvents(fetchedEvents);
  };

  React.useEffect(() => fetchData(), []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const addGuest = async (event, name, email, callback) => {
    const guests = event.guest || [];
    const guestFound = guests.find((attendee) => attendee.guest.email === email);

    if (guestFound) {
      alert('Guest added previously.');
      return;
    }

    try {
      await EventsService.addGuest(event._id, name, email);
      await fetchData();
      callback();
    } catch(error) {
      alert('Error', error);
    }
  };

  return (
    <div>
      <EventTabs/>
      <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}><h1>{props.eventState.eventName}'s Guest List</h1></Paper>
                </Grid>
                </Grid>
    <Container>
      <div className={classes.root}>
        <Grid container justify="space-around">
          <SelectEvent events={events} selectedEvent={selectedEvent} onSelect={selectEvent} />

          { Object.keys(selectedEvent).length !== 0 && (<AddGuests event={selectedEvent} addGuest={addGuest} />) }
        </Grid>
      </div>
    </Container>
    </div>
  );
}
