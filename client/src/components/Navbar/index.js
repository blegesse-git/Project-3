import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import "./style.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit"> <Link to = "/home" className="link">Home</Link></Button>
          <Button color="inherit"><Link to = "/invoice" className="link">Invoice </Link></Button>
          <Button color="inherit"> <Link to =" /rsvp" className="link">RSVP</Link></Button>
          <Button color="inherit"> <Link to="/events" className="link">My Events</Link></Button>
          <Button color="inherit"> <Link to ="/inspo" className="link">Inspiration</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
