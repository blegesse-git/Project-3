import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {Link} from "react-router-dom";
import MyEvents from "../../pages/MyEvents"
import Invoice from '../../pages/invoice';


export default function SimpleTabs() {

  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (tab, newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <div >
      <AppBar position="static" style={{backgroundColor: "white", color: "black"}}>
        <Tabs value={currentTab} onChange={handleChange} aria-label={currentTab}>
        <Link to="/events" className="link"> <Tab label="Event Board"  /> </Link>
        <Link to = "/invoice" className="link"> <Tab label="Invoice" /></Link>
        <Link to =" /rsvp" className="link"><Tab label="RSVP"  /></Link>
        </Tabs>
      </AppBar>

    </div>
  );
}
