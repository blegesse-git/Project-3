import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
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
import Modal from '@material-ui/core/Modal';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        flexGrow: 2,
        Width: 650,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        backgroundColor: "#e94837",
        color: 'white',
        width: 400,
        height: 50,
        // marginLeft: 50,
    }
}));

const InvoiceList = ({ invoice }) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2>Invoice For:</h2>
            <h3>{`${invoice.firstName} ${invoice.lastName}`}</h3>
            <p>{`${invoice.address1}`}</p>
            <p>{`${invoice.address2}`}</p>
            <p>{`${invoice.city}`}</p>
            <p>{`${invoice.state}`}</p>
            <p>{`${invoice.zip}`}</p>
            <hr></hr>
            <h2>Summary of Services Made:</h2>
            <p>{`${invoice.invoiceSummary}`}</p>
            <br></br>
            <p>{`Amount Due: $${invoice.amountDue}`}</p>
            <p>Please play within 30 days of {`${invoice.invoiceDate}`}</p>
        </div>
    );

    return (
        <Container>
            <div className={classes.root}>
                <List>

                    <Button className={classes.button} type="link" variant="contained" onClick={handleOpen}>{`${invoice.firstName} ${invoice.lastName}`}</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                    >
                        {body}
                    </Modal>

                </List>
            </div>
        </Container>
    );
}

export default InvoiceList;