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
import Logo from "../../assets/Logo.jpg"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
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
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} className="headLogo" id="logo"/>
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
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>



        {/* 
       <Button color="inherit">  */}
       
        <Link to="/home" className="link"> 
        
          <ListItem button >
          <ListItemIcon>
            <HomeOutlinedIcon style={{ fontSize: 30}} />
          </ListItemIcon>
          <ListItemText>
            <Typography style={{ fontWeight: 1000, fontSize: 18}} >Home</Typography>
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




