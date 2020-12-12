import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      Width: 650,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    }
  
  }));

const InvoiceList = ({ title }) => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <List>
                    <ListItemAvatar>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={title} />
                    
                </List>
            </div>
        </Container>
    )
}