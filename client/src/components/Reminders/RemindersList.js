// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { Container } from '@material-ui/core';
// import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 2,
//     Width: 650,
//   },
//   demo: {
//     backgroundColor: theme.palette.background.paper,
//   }

// }));





// const RemindersList =({title}) =>{
//   const classes = useStyles();

//   return (
//       <Container>
//     <div className={classes.root}>
   
//             <List>
//                 <ListItem > 
//                   <ListItemAvatar>
//                   <Avatar> 
//                    <NotificationsActiveIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText primary ={title}/>
//                   <ListItemSecondaryAction>
//                   <IconButton edge="end" aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   </ListItemSecondaryAction>
//                 </ListItem>,  
//             </List>
//           </div>
//     </Container>
//   );
// }



// export default RemindersList;