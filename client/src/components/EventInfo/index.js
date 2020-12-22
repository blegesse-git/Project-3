import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { VenueContext } from '../../context/VenueContext';
import EventsService from '../../services/events';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EventInfo(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // useEffect(() => {
  //   const response = await EventsService.addVenue
  // }, [])

  return (
      
    <Card className={classes.root}>
        
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Here is Event Venue Information
        </Typography>
        <Typography variant="h5" component="h2">
          Venue Name: {props.info.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Venue Phone: {props.info.phone}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Venue Website: {props.info.website}
        </Typography>
        <Typography variant="body2" component="p">
          Event Time: {props.info.time}
          <br />
          Event Address: {props.info.address}
        </Typography>
      </CardContent>
      
   
   </Card>
  );
}
