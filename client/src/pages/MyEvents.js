import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import ButtonAppBar from '../components/Navbar'
import InputWithIcon from '../components/TextField'
import OutlinedButtons from '../components/Submit Button'
// import UploadButton from '../components/Upload Button'
import Container from '../components/Container'
import ToDOList from '../components/To-Do'
import Budget from '../components/Budget'
import Button from '@material-ui/core/Button';
import Receipt from '../../src/components/Receipt';
import EventInfo from '../../src/components/EventInfo'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid( props) {
  const classes = useStyles();


  return (
    <div>
        
        {/* <ButtonAppBar /> */}
        <Container>
            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}><h1>{props.eventState.eventName}</h1></Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                        <Budget />
                        
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        
                        <EventInfo eventState={props.eventState}/>
                        

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h2>To-Do list</h2>
                        <ToDOList />
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Receipt />
                    </Paper>
                </Grid>
                
            </Grid>
            </div>
        </Container>
    </div>
  );
}













// import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import ButtonAppBar from '../components/Navbar'
// import SimpleCard from '../components/Card'
// import 'antd/dist/antd.css'
// import InputWithIcon from '../components/TextField'
// import OutlinedButtons from '../components/Submit Button'
// import UploadButton from '../components/Upload Button'
// import Container from '../components/Container'



// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//     maxWidth: 500,
//   },
// });

// export default function Types() {
//   const classes = useStyles();

//   return (
//     <div>
        
//         <ButtonAppBar />
//         <Container>
        
//             <div className={classes.root}>
            
//                 <Typography variant="h2" gutterBottom id='name'>
//                     Nina's Birthday
//                 </Typography>
//                 <hr></hr>
//             </div>
//             <SimpleCard>
//                 <h2 >30 Days Until Event</h2>
//             </SimpleCard>
//             <SimpleCard>
//                 <h2>Event Budget</h2>
//                 <h3>Total Budget:</h3>
//                 <p>$0.00</p>
//                 <h3>Current Balance:</h3>
//                 <p>$0.00</p>
//                 <h3>Expenses:</h3>
//                 <p>$0.00</p>
//                 <InputWithIcon> Increase Budget</InputWithIcon>
//                 <OutlinedButtons>Submit</OutlinedButtons>
//                 <InputWithIcon> Add Expenses</InputWithIcon>
//                 <OutlinedButtons>Submit</OutlinedButtons>
//             </SimpleCard>
//             <SimpleCard>
//                 <h3>Upload Reciepts Here</h3>
//                 <UploadButton />
//             </SimpleCard>
//         </Container>
//     </div>
//   );
// }