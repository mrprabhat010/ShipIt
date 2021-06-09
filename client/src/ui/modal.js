import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    // position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    // transform:'translate(50%,50%)',
  },
  modal:{
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.modal);


  const handleClose = () => {
      props.clickAway()
    setOpen(false);
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className={classes.paper}>
      {props.content}
    </div>
      </Modal>
    </div>
  );
}
