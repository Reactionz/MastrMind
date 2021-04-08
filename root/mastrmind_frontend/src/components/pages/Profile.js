import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 
    Button, Typography, makeStyles, 
    Grid, TextField, Avatar, 
    Card, Paper, Divider, 
    CardHeader, CardMedia, CardContent,
    CardActions, Collapse, IconButton
} from '@material-ui/core'
import AuthContext from './../../context/user_context';
// import Axios from 'axios';
import MMProfPic1 from "./../assets/mastrmind-prof-pic-1.png";
// import SvgIcon from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '40ch',
        },
    },
    avatar: {
        height: '15ch',
        width: '15ch'
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

// const retrieveCurrentUser = async (user) => {
//     const profileId = user.id;
    
//     await Axios.get(`http://localhost:3001/auth/profile/${profileId}`);
// }

function EventCardHeader(props) {
    const { classes } = props;
    return (
            <CardHeader 
                avatar = {
                    <Avatar 
                        aria-label = "Profile Pic"
                        src = {props.avatar}
                    />
                }
                title = {props.title}
                subheader = {props.subheader}
                className = {props.className}
            />
    )
} 

function EventCardMedia(props) {
    // this requires a height on the photo or it won't display.
    const { classes } = props;

    return (
        <CardMedia 
        className = {props.className}
        image = {props.image}
        alt = {props.alt} />
    )
}

function EventCard(props) {
    // look into making this a dynamic card so i can make a card for every event that a user has.
    // also going to need a boolean that will display no cards and a message if there is an event.
}

function ProfileCard(props) {
    // TODO: Dynamic data from each profile.
}

function BadgeCard(props) {
    
}

export default function Profile() {
    // Styles for Our Component
    const classes = useStyles();
    const padding = { padding: 40 }
    const [ expanded, setExpanded ] = useState(false);

    // Needed to hold the history and working user context of our application.
    const history = useHistory();
    const { loggedIn } = useContext(AuthContext);

    // Holding the information about our user.

    // Needed to be able to open our cards.
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        // conditional code for if a user is logged in as the correct user.

        <div className = "profile-page">
            {/* starting with a container */}
            <Grid container justify = "left" spacing = "3" direction = "row" style = {padding} >
            {/* needs a photo in the box */}

                <Grid item>
                    <Grid container direction = "column" justify = "left" className = "profile-card">
                        <Paper variant = "elevation" elevation = {2} className = "profile-background">
                            <CardHeader title = "Welcome Username"/>
                                {/* try to fill up the right side of the card with some information. */}
                            <Divider/>
                            <Grid item>
                                <Card className = {classes.root} justify = "left">
                                    <Grid item align = "center">
                                        <Avatar alt = "Profile Picture" align = "center" className = {classes.avatar} src = {MMProfPic1} />
                                    </Grid>
                                    <Divider />
                                    <Grid item>
                                        <Typography variant = "overline"> Full Name </Typography>
                                        <Typography variant = "h5"> John Doe </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant = "overline"> Username </Typography>
                                        <Typography variant = "h5"> JohnDoe111 </Typography>
                                    </Grid>

                                    <Grid item> 
                                        <Typography variant = "overline"> Birthday </Typography>
                                        <Typography variant = "h5"> April 6, 2021 </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant = "overline"> Biography </Typography>
                                        <Typography variant = "body1"> Lorem Ipsum Text </Typography>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction = "column" className = "badges-card">
                        <Paper variant = "elevation" elevation = {2} className = "badges-background">
                            <CardHeader title = "Username's Badges" align = "left"/>

                            <Divider/>

                            <Grid item>
                                <Card className = {classes.root}>
                                    <Grid item>
                                        {/* Maybe include a progress bar right here with some sort of ranking system. */}
                                        <Typography variant = "overline">
                                            Recent Badges: 
                                        </Typography>
                                        <Typography variant = "body1">
                                            No Badges Yet! 
                                        </Typography>
                                        {/* TODO: To add the code needed to create a new looking card with badges that are possible to do.
                                        Maybe something for daily */}
                                        <Typography variant = "overline">
                                            Daily Challenges:
                                        </Typography>
                                        <Typography variant = "body1">
                                            No Challenges Available!
                                        </Typography>
                                    </Grid>
                                </Card>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container direction = "row" className = "profile-events">
                        <Typography variant = "h3" align = "left"> Events </Typography>
                        {/* I want to create cards with events that are
                            upcoming or just anything that may be scheduled. */}
                    </Grid>

                    <Grid container direction = "row">
                        {/* 
                            I want to dynamically create cards maybe right here but not sure how that will get done.
                            I also want to create a scroll bar that will be created based on the amount of events
                            that are available.
                        */}

                        <Grid item>
                            <Card variant = "outlined" className = {classes.root}>
                                <EventCardHeader avatar = {MMProfPic1} title = "Sample Event" subheader = "April 7, 2021" />
                                <EventCardMedia className = {classes.media} image = {MMProfPic1} alt = "Event Media"/> 
                                <CardContent>
                                    <Typography align = "center"> You have an event coming up! </Typography>
                                </CardContent>
                                <Divider/>
                                <CardActions>
                                    <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" align = "right">
                                        <ExpandMoreIcon />
                                    </IconButton>
                                        {/* add buttons in this section. 
                                    not sure if this should be dynamic based on the link of our event but we'll see
                                    also going to add a link to the event in a button as well as clicking the photo or something. */}
                                </CardActions>
                               
                                <Collapse in = {expanded} timeout = "auto" unmountOnExit>
                                    {/* need to be able to add dynamic descriptions of our events */}
                                    <CardContent>
                                        <Typography paragraph>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Pellentesque placerat vulputate orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Etiam felis lorem, sodales a tellus et, malesuada commodo quam. 
                                            Proin porttitor massa non erat lacinia eleifend. Vestibulum pharetra egestas metus ut finibus. 
                                            Morbi sit amet mauris ultricies, imperdiet turpis et, accumsan tortor. 
                                            Maecenas facilisis est sit amet justo placerat, non laoreet felis finibus. 
                                            Proin porta leo a mi hendrerit tincidunt. 
                                            Cras tempus iaculis eros, vitae malesuada metus molestie et.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>

                        <Grid>
                            <Card variant = "outlined" className = {classes.root}>
                                <EventCardHeader avatar = {MMProfPic1} title = "Sample Event" subheader = "April 7, 2021" />
                                <EventCardMedia className = {classes.media} image = {MMProfPic1} alt = "Event Media"/> 
                                <CardContent>
                                    <Typography align = "center"> You have an event coming up! </Typography>
                                </CardContent>
                                <Divider/>
                                <CardActions>
                                    <IconButton className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more" align = "right">
                                        <ExpandMoreIcon />
                                    </IconButton>
                                        {/* add buttons in this section. 
                                    not sure if this should be dynamic based on the link of our event but we'll see
                                    also going to add a link to the event in a button as well as clicking the photo or something. */}
                                </CardActions>
                            
                                <Collapse in = {expanded} timeout = "auto" unmountOnExit>
                                    {/* need to be able to add dynamic descriptions of our events */}
                                    <CardContent>
                                        <Typography paragraph>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Pellentesque placerat vulputate orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            Etiam felis lorem, sodales a tellus et, malesuada commodo quam. 
                                            Proin porttitor massa non erat lacinia eleifend. Vestibulum pharetra egestas metus ut finibus. 
                                            Morbi sit amet mauris ultricies, imperdiet turpis et, accumsan tortor. 
                                            Maecenas facilisis est sit amet justo placerat, non laoreet felis finibus. 
                                            Proin porta leo a mi hendrerit tincidunt. 
                                            Cras tempus iaculis eros, vitae malesuada metus molestie et.
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </div>

    )
}