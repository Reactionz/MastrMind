import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(10),
        position: 'absolute',
        top: theme.spacing(20),
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();

    return (
        <Dialog open = {openPopup} maxWidth="sm">
            <DialogTitle>
                <div>-------- ADD A NEW TASK --------</div>
            </DialogTitle>
            <DialogContent dividers>
            <TextField
          id="standard-full-width"
          label="New Task"
          style={{ margin: 8 }}
          placeholder="Get productive!"
          fullWidth
          margin="normal"
          />
            </DialogContent>
        </Dialog>
    )
}