import React from 'react'
import { Dialog, DialogTitle, DialogContent, makeStyles, Typography, Box } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Controller from '../controller/controller'
import CloseIcon from '@material-ui/icons/Close';




const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(10),
        position: 'absolute',
        top: theme.spacing(20),
    },
    dialogTitle: {
        paddingRight: '0px'
    },
    padding: {
        padding: theme.spacing(3)
    }


}))

export default function Event(props) {

    const { title, children, openEvent, setOpenEvent } = props;
    const classes = useStyles();
    const CHARACTER_LIMIT = 25;
    const [values, setValues] = React.useState({
      name: "",
      event: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Dialog open = {openEvent} maxWidth="sm">
            <DialogTitle position="center">
                <div style = {{display: 'flex'}}>
                    <Typography className={classes.padding} variant="h6">
                        
                        ADD A NEW EVENT 
                    </Typography>
                    
                    <CloseIcon
                    color = "secondary"
                    variant = "text"
                    size = "small"
                    onClick = {() => { values.name = ""; setOpenEvent(false);}}
                />
                </div>
            </DialogTitle>
            <DialogContent dividers>
            <FormGroup aria-label="position" column>
                <TextField
                    label="   Event Title   "
                    inputProps={{
                    maxlength: CHARACTER_LIMIT
                    }}
                    value={values.name}
                    helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                />

                <Controller.Button
                    text = "Add Event"
                    color = "primary"
                    variant = "outlined"
                    onClick = {() => { values.event = values.name; values.name = ""; setOpenEvent(false);}}
                />

                

            </FormGroup>

            </DialogContent>
        </Dialog>
    )
}

