import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import ReceiptIcon from '@material-ui/icons/Receipt';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      padding: 20,
      marginLeft: 60
    },
  });

 function EventTabs() {

    const classes = useStyles()

  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (tab, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <div className={classes.root} >
      {/* <AppBar position="static"  style={{backgroundColor: "white", color: "black"}}> */}
        <Tabs value={currentTab} onChange={handleChange} aria-label={currentTab} textColor="primary"   indicatorColor="secondary">
        <Link to="/events" className="link"> <DashboardIcon style={{ fontSize: 30 }} /><Tab label="Event Board"/> </Link>
        <Link to = "/invoice" className="link"> <ReceiptIcon style={{ fontSize: 30 }} /><Tab label="Invoice" /></Link>
        <Link to ="/rsvp" className="link"><MailOutlineIcon style={{ fontSize: 30 }} /><Tab label="RSVP"  /></Link>
        </Tabs>
      {/* </AppBar> */}

    </div>
  );
}
export default EventTabs;