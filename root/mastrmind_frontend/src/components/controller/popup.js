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
    }
}))

export default function Popup(props) {

    const { openPopup, setOpenPopup } = props;
    const classes = useStyles();
    const CHARACTER_LIMIT = 25;
    const [values, setValues] = React.useState({
      name: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    return (
        <Dialog open = {openPopup} maxWidth="sm">
            <DialogTitle position="center">
                <div style = {{display: 'flex'}}>
                    <Typography variant="h6" component="div" style={{flexGrow:2}}>
                        
                        ADD A NEW TASK
                    </Typography>
                    
                    <CloseIcon
                    color = "secondary"
                    size = "small"
                    variant = "contained"
                    onClick = {() => { values.name = ""; setOpenPopup(false);}}
                />
                </div>
            </DialogTitle>
            <DialogContent dividers>
            <FormGroup aria-label="position" column>
                <TextField
                    label="Task Title"
                    inputProps={{
                    maxlength: CHARACTER_LIMIT
                    }}
                    value={values.name}
                    helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
                    onChange={handleChange("name")}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="task"
                    label="New Task"
                    style={{ margin: 8 }}
                    placeholder="Get productive!"
                    fullWidth
                    margin="normal"
                />
                <Box mt={3}>
                <RadioGroup row aria-label="priority" name="priority">
                    <FormLabel component="legend" margin="normal">Task's Priority Level:</FormLabel>
                    <Box mt={1}>
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
                    </Box>
                </RadioGroup>
                </Box>

                

                <TextField
                    id="end_date"
                    label="Finish Date"
                    type="date"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

                <Controller.Button
                    text = "Add Task"
                    color = "primary"
                    variant = "outlined"
                    onClick = {() => { values.name = ""; setOpenPopup(false);}}
                />

                

            </FormGroup>

            </DialogContent>
        </Dialog>
    )
}
