import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Container } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SetReminder from "../SetReminder/SetReminder"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    Width: 650,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

 function Reminders() {
  const classes = useStyles();
//   const [dense, setDense] = React.useState(false);
//   const [secondary, setSecondary] = React.useState(false);

  return (
      <Container>
        
    <div className={classes.root}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
         My Reminders
          </Typography>
       
          <div className={classes.demo}>
            {/* <List dense={dense}> */}
            <List>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <NotificationsActiveIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    // secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}

              <SetReminder/>
            </List>
          </div>
        </Grid>
    </div>
    </Container>
  );
}


export default Reminders;