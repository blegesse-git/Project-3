import React, { useRef, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

import EventsService from '../services/events';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Confirmation(){
    const classes = useStyles();
    const { id } = useParams();
    const [message, setMessage] = useState('Wait a couple of minutes...');
    const rootRef = React.useRef(null);

    const confirmToApi = () => {
        EventsService.confirmGuestAttendance(id);
    };

    React.useEffect(
        () => {
            const timeout = setTimeout(() => {
                confirmToApi();
                setMessage('You are all set! See you next time');
            }, 2000);
        },
        [],
    );
    return(
        <div className={classes.root} ref={rootRef}>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
            >
                <div className={classes.paper}>
                <h2 id="server-modal-title">Confirming your invitation</h2>
                <p id="server-modal-description">{message}</p>
                </div>
            </Modal>
        </div>
    )
}
export default Confirmation