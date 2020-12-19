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
  const [events, setEvents] = React.useState([]);
  const [internalEvent, setInternalEvent] = React.useState(props.eventState);

  const fetchData = async () => {
    const fetchedEvents = await EventsService.getEvents();
    setEvents(fetchedEvents);

    if (internalEvent._id) {
      const eventFound = fetchedEvents.find((e) => e._id === internalEvent._id);
      setInternalEvent({ ...eventFound });
    }
  };

  React.useEffect(() => fetchData(), []);

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
    } catch (error) {
      alert('Error', error);
    }
  };

  return (
    <div>
      <EventTabs />
      <Container>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}><h1>{props.eventState.eventName}</h1></Paper>
            </Grid>
          </Grid>

          <div className={classes.root}>
            <Grid container justify="space-around">
              {Object.keys(props.eventState).length !== 0 && (<AddGuests event={internalEvent} addGuest={addGuest} />)}
            </Grid>
          </div>
          </div>
    </Container>
    </div>
  );
}
