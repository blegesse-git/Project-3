import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,
      Width: 650,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  }));

const InvoiceList = ({ invoice }) => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.root}>
                <List>

                    <Button primary={`${invoice.firstName} ${invoice.lastName}`}>{`${invoice.firstName} ${invoice.lastName}`}</Button>
                    <ListItemSecondaryAction>
                    </ListItemSecondaryAction>
                </List>
            </div>
        </Container>
    );
}

export default InvoiceList;