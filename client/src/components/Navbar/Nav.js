import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import "./style.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import EventLinks from "./EventLinks"
import AddNewEvent from '../AddNewEventBtn/AddNewEvent';
import Logo from "../../assets/Partie-Logo.png"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexGrow: 1,
    justifyContent: 'center',
  },

  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
    color: "white",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    color: "white",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    color: 'white',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#323e48",
    padding: theme.spacing(0, 1),
    color: "white",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    color: "white",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    color: "white",
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    color: "white",
  },
}));

function Nav(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Toolbar className="toolbar">
        <IconButton
          // color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/home" className="link">
        <img src={Logo} className="headLogo" />
        </Link>
      </Toolbar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'white'}} /> : <ChevronRightIcon style={{ color: 'white'}} />}
          </IconButton>
        </div>



        {/* 
       <Button color="inherit">  */}

        <Link to="/home" className="link">

          <ListItem button >
            <ListItemIcon>
              <HomeOutlinedIcon style={{ fontSize: 30, color: 'white' }} />
            </ListItemIcon>
            <ListItemText>
              <Typography style={{ fontWeight: 1000, fontSize: 18, color: 'white' }} >Home</Typography>
            </ListItemText>
          </ListItem>
        </Link>
        {/* </Button> */}
        <Divider />
        {/* <Button color="inherit"> */}
        {/* <CakeOutlinedIcon style={{ fontSize: 40 }} /> */}
        {/* <h3 className="myEventsBtn">My Events</h3> */}
        {/* </Button> */}
        {/* <Button color="inherit"> */}
        <EventLinks setEvent={props.setEvent} className="link" />
        {/* </Button> */}

        <Divider />
        {/* <Button color="inherit"> */}
        {/* <FavoriteBorderOutlinedIcon style={{ fontSize: 40 }} /> */}

        {/* </Button> */}
        <Divider />
        <AddNewEvent setEvent={props.setEvent} />







      </Drawer>

    </div>
  );
}

export default Nav;




