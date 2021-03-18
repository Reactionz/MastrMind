import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

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
            <FormGroup aria-label="position" row>
                <TextField
                    id="task"
                    label="New Task"
                    style={{ margin: 8 }}
                    placeholder="Get productive!"
                    fullWidth
                    margin="normal"
                />
                <RadioGroup row aria-label="position" name="position" defaultValue="top">
                    <FormLabel component="legend" margin="normal">Task's Priority Level:</FormLabel>
                        <FormControlLabel
                            value="high"
                            control={<Radio color="primary" />}
                            label="High"
                            labelPlacement="top"
                            />
                        <FormControlLabel
                            value="meduim"
                            control={<Radio color="primary" />}
                            label="Meduim"
                            labelPlacement="top"
                            />
                        <FormControlLabel
                            value="low"
                            control={<Radio color="primary" />}
                            label="Low"
                            labelPlacement="top"
                            />
                </RadioGroup>
            </FormGroup>

            </DialogContent>
        </Dialog>
    )
}