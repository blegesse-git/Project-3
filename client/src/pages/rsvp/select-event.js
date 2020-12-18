import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: 30,
  },
  formControl: {
    width: '100%',
  },
  paper: {
    width: '100%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function SelectEvent(props) {
  const { events, onSelect, selectedEvent } = props;
  const classes = useStyles();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    const eventFound = events.find(({ _id }) => _id === value);
    onSelect(eventFound);
  };

  return (
    <Grid container className={classes.root}>

      <Grid item className={classes.paper}>
        <Card>
          <CardContent>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">Event name</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={selectedEvent ? selectedEvent._id : 0}
                onChange={onChange}
              >
                <MenuItem value={0}>
                  <em>Select an event</em>
                </MenuItem>

                {
                  events.map((event) => (
                    <MenuItem key={event._id} value={event._id}>{event.eventName}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  )
}
