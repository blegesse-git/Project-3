import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function CenteredGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Paper className={classes.paper}>{props.children}</Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>{props.second}</Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item md={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
