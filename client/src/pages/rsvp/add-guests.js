import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

  return (
    <Grid container className={classes.root}>

      <Grid item>
        
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                <img src={event.picture} className={classes.picture} />
              </Grid>

              <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>

                <Grid container>
                  <Grid xs={12}>
                    <TextField className={classes.formInput} id="name" label="Name" variant="filled" />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={12}>
                    <TextField className={classes.formInput} id="email" label="Email" variant="filled" />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid xs={12}>
                    <Button variant="contained" className={classes.cancelButton}>Cancel</Button>

                    <Button variant="contained" color="primary">
                      Add
                    </Button>
                  </Grid>
                </Grid>

              </Grid>
            </Grid>
          </CardContent>
        </Card>

      </Grid>

    </Grid>
  )
}
