import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  paper: {
    width: '100%',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  picture: {
    width: '100%',
    objectFit: 'cover',
  },
  formInput: {
    width: '100%',
    marginBottom: 20,
  },
  cancelButton: {
    marginRight: 10,
  },
}));

export default function SelectEvent(props) {
  const { event, addGuest } = props;
  const classes = useStyles();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const onCancel = () => {
    setName('');
    setEmail('');
  };

  const onAdd = (ev) => {
    ev.preventDefault();
    addGuest(event, name, email, onCancel);
  };

  const guests = event.guest || [];

  return (
    <Grid container className={classes.root}>

      <Grid item xs={12}>
        
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <img src={event.picture} className={classes.picture} />
              </Grid>

              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>

                <Grid container>
                  <Grid xs={12}>
                    <TextField className={classes.formInput} value={name} id="name" label="Name" variant="filled" onChange={(ev) => setName(ev.target.value)}/>
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={12}>
                    <TextField className={classes.formInput} value={email} id="email" label="Email" variant="filled" onChange={(ev) => setEmail(ev.target.value)} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={12}>
                    <Button variant="contained" className={classes.cancelButton} onClick={onCancel}>Cancel</Button>

                    <Button variant="contained" color="primary" onClick={onAdd}>
                      Add
                    </Button>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </Grid>

      <Grid style={{ paddingTop: 20 }} item xs={12}>
        
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Is Attending?</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {guests.map((row) => (
                        <TableRow key={row._id}>
                          <TableCell align="right">{row.guest.firstName}</TableCell>
                          <TableCell align="right">{row.guest.lastName}</TableCell>
                          <TableCell align="right">{
                            row.guest.isAttending
                              ? (<DoneOutlineIcon />)
                              : (<CancelOutlinedIcon />)
                          }</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </Grid>

    </Grid>
  )
}
