import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from '../components/Navbar'
import InputWithIcon from '../components/TextField'
import OutlinedButtons from '../components/Submit Button'
import UploadButton from '../components/Upload Button'
import Container from '../components/Container'

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

  export default function FullWidthGrid() {
      const classes = useStyles();

      return (
          <div className={classes.root}>
            <Grid item xs={12}>
                <Paper className={classes.paper}><h1>Invoice</h1></Paper>
            </Grid>

          </div>
      )
  }