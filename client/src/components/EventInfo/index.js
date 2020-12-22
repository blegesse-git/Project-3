import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { VenueContext } from '../../context/VenueContext';
import EventsService from '../../services/events';
import './style.css'
import logo from '../../assets/Partie-Logo-Blue.png'
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
      <img src={logo} className="frame"></img>
        
      <CardContent>
        <Typography className={classes.title} color="textSecondary" className="venue" gutterBottom>
          Here is Event Venue Information
        </Typography>
        <br></br>
        <Typography variant="h5" component="h2" id="venueName">
           {props.info.name}
           
        </Typography>
        <br></br>
        <Typography className={classes.pos} color="textSecondary">
          Address: {props.info.address}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
          Phone: {props.info.phone}
         
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Website: {props.info.website}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Event Time: {props.info.time}
          <br />
          
        </Typography>
      </CardContent>
      
   
   </Card>
  );
}
