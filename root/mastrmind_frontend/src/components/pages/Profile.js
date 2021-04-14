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
import Axios from 'axios';
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

const retrieveCurrentUser = async () => {    
    await Axios.get(`http://localhost:3001/auth/profile`);
}

function EventCardHeader(props) {
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
    const classes = useStyles();
    const [ expanded, setExpanded ] = useState(false);

    // Needed to be able to open our cards.
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <Grid item>
            <Card variant = "outlined" className = {classes.root}>
            <EventCardHeader 
                avatar = {props.avatar} 
                title = {props.eventHeaderTitle} 
                subheader = {props.eventHeaderDate}
                />
            <EventCardMedia className = {classes.media} image = {props.cardMediaImage} alt = "Event Picture" />
            <CardContent> 
                <Typography align = "center">
                    You have an event coming up!
                </Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <IconButton className = {
                    clsx(classes.expand, {[classes.expandOpen]: expanded,})
                    } 
                    onClick = {handleExpandClick} 
                    aria-expanded = {expanded} 
                    aria-label="Show More" 
                    align = "right">
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in = {expanded} timeout = "auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {props.eventDescription}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
        </Grid>
    )
}

function ProfileCard(props) {
    // TODO: Dynamic data from each profile.
    const classes = useStyles();
    // const padding = {padding: 40}

    return (
        <Grid item> 
            <Grid container direction = "column" justify = "left" className = "profile-card">
                <Paper variant = "elevation" elevation = {2} className = "profile-background">
                    <CardHeader title = {`Welcome ${props.username}`}/>
                    <Divider />
                    <Grid item>
                        <Card className = {classes.root} justify = "left">
                            <Grid item align = "center">
                                <Avatar alt = "Profile Picture" align = "center" className = {classes.avatar} src = {props.profileAvatar} />
                            </Grid>
                            <Divider />
                            <Grid item>
                                <Typography variant = "overline"> Full Name </Typography>
                                <Typography variant = "h6"> {props.fullName} </Typography>
                            </Grid> 

                            <Grid item>
                                <Typography variant = "overline"> Username </Typography>
                                <Typography variant = "h6"> {props.username} </Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant = "overline"> Birthday </Typography>
                                <Typography variant = "h6"> {props.birthDate} </Typography>
                            </Grid>
                            
                            <Grid item>
                                <Typography variant = "overline"> Biography </Typography>
                                <Typography variant = "body1"> {props.userBio} </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

function BadgeCard(props) {
    const classes = useStyles();

    return (
        <Grid item>
            <Grid container direction = "column" className = "badges-card">
                <Paper variant = "elevation" elevation = {2} className = "badges-background">
                    <CardHeader title = {`${props.username}'s Badges`} align = "left" />
                    <Grid item>
                        <Card className = {classes.root}>
                            <Grid item>
                                <Typography variant = "overline">
                                    Recent Badges:
                                </Typography>
                                <Typography variant = "body1">
                                    {props.badges}
                                </Typography>
                                <Typography variant = "overline">
                                    Daily Challenges:
                                </Typography>
                                <Typography variant = "body1">
                                    {props.dailyChallenges}
                                </Typography>
                                <Typography variant = "overline">
                                    Weekly Challenges: 
                                </Typography>
                                <Typography variant = "body1">
                                    {props.weeklyChallenges}
                                </Typography>
                            </Grid>
                        </Card>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default function Profile() {
    // Styles for Our Component
    // const classes = useStyles();
    const padding = { padding: 40 }
    const [ expanded, setExpanded ] = useState(false);

    retrieveCurrentUser();

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
                <ProfileCard username = "Dynamic Guy" fullName = "Lawrence Marquez" birthDate = "June 30th 1997" userBio = "yoooooo"/>
                <BadgeCard username = "Dynamic Guy" badges = {"cool guy badge: do 3 cool things today"} dailyChallenges = {"eat a cookie today"} weeklyChallenges = {"meditate everyday"} />
                
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

                        <EventCard 
                            avatar = {MMProfPic1}
                            eventHeaderTitle = {"Dynamic Event Card"}
                            eventHeaderDate = {"April 10 2021"}
                            cardMediaImage = {MMProfPic1} 
                            eventDescription = {"Lorem Ipsum Text"}
                        />
                    </Grid>

                </Grid>
            </Grid>
        </div>

    )
}

// Default Information Needed for Our Components

BadgeCard.defaultProps = {
    badges: "No Badges Yet!",
    dailyChallenges: "No Daily Challenges Avaiable Yet!",
    weeklyChallenges: "No Weekly Challenges Avaiable Yet!"
}

ProfileCard.defaultProps = {
    birthDate: "No Birth Date for User!",
    userBio: "No User Biography is available!"
}

EventCard.defaultProps = {
    eventHeaderTitle: "Event",
    eventDescription: "No Description for This Event!"
}