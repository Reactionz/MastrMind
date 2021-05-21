import React, { useContext, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { 
    Button, Typography, makeStyles, 
    Grid, TextField, Avatar, 
    Card, Paper, Divider, 
    CardHeader, CardMedia, CardContent,
    CardActions, Collapse, IconButton, 
    colors, Dialog, DialogTitle, 
    DialogContent, DialogActions
} from '@material-ui/core'

import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import AuthContext from './../../context/user_context';
import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import clsx from 'clsx';
import axios from 'axios';
import Leaderboard from './../layout/leaderboard';

const MMProfPic1 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-1.png"
const MMProfPic2 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-2.png"
const MMProfPic3 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-3.png"
const MMProfPic4 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-4.jpeg"
const MMProfPic5 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-5.jpeg"
const MMProfPic6 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-6.png"
const MMProfPic7 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-7.jpeg"
const MMProfPic8 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-8.png"
const MMProfPic9 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-9.png"
const MMProfPic10 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-10.png"
const MMProfPic11 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-11.png"
const MMProfPic12 = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/mastrmind-prof-pic-12.png"
const MMEventPic = "https://mastrmind-assets.s3-us-west-1.amazonaws.com/assets/events.png"



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
        height: 'auto',
        paddingTop: '25.25%'
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
    modalPaper: {  
        position: 'absolute',
        width: '80rem',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[3],
        padding: theme.spacing(2, 4, 3)
    }
}));


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
        alt = {props.alt}
        component = "img"
         />
    )
}

function EventList(props) {
    // current bug: the icon button doesn't flip everytime for every event card. need to look into it.
    const events = props.events;
    console.log(events);

    const classes = useStyles();
    const [ expandedId, setExpandedId ] = useState(-1);

    // Needed to be able to open our cards.
    const handleExpandClick = i => {
        setExpandedId(expandedId === i ? -1 : i);
    };

    const eventCards = events.map((event, i) => {
        return (
            <Grid item key = {event.id}>
                <Card variant = "outlined" className = {classes.root}>
                <EventCardHeader 
                    avatar = {props.avatar} 
                    title = {event.eventTitle} 
                    subheader = {event.eventStartDate}
                    />
                <EventCardMedia className = {classes.media} image = {MMEventPic} alt = "Event Picture" />
                <CardContent> 
                    <Typography align = "center">
                        You have an event coming up!
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                    <IconButton className = {
                        clsx(classes.expand, {[classes.expandOpen]: expandedId,})
                        } 
                        onClick = {() => {handleExpandClick(i)} }
                        aria-expanded = {expandedId === i} 
                        aria-label="Show More" 
                        align = "right">
                        <ExpandMoreIcon/>
                    </IconButton>
                </CardActions>
                <Collapse in = {expandedId === i} timeout = "auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {event.eventDescription}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            </Grid>
        )
    });

    return (
        <>
            {eventCards} 
        </>
    )
}


// needs events to pass in information for the cards to be created.
function EventCard(props) {
    // look into making this a dynamic card so i can make a card for every event that a user has.
    // also going to need a boolean that will display no cards and a message if there is an event.
    console.log(props.events)
    const events = props.events;

    return (
        <>
            <EventList events = {events}/>
        </>
    )
}


function ProfileCard(props) {
    // TODO: Dynamic data from each profile.
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(false);
    const [profilePicture, setPicture] = useState('')

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleSelected = () => {
        setSelected(true);
    }

    const handlePicture = (event, newPicture) => {
        if(newPicture !== null) {
            setPicture(newPicture);
        }
    }

    const handleSelectedPicture = async (e) => {
        e.preventDefault();
        // TODO: Need to post form information that will change the picture we are using.
        try {
            const changePicture = {profilePicture}
            console.log(`posting selected picture: ${profilePicture}`);
            await axios.post('http://localhost:3001/auth/editProfilePicture', changePicture);
            // await 
            handleClose();
        } catch (err) {
            console.error(err);
        }
        
    }
    
    const dialogBody = (
        <Grid item>
            <DialogTitle id = 'picture-selector-title'> Change Profile Picture</DialogTitle>
            <DialogContent>
                <ToggleButtonGroup value = {profilePicture} exclusive onChange = {handlePicture}>
                    <ToggleButton  value = {MMProfPic1}>
                        <Avatar src = {MMProfPic1}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic2}>
                        <Avatar src = {MMProfPic2}/>
                    </ToggleButton>
                    <ToggleButton  value = {MMProfPic3}>
                        <Avatar src = {MMProfPic3}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic4}>
                        <Avatar src = {MMProfPic4}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic5}>
                        <Avatar src = {MMProfPic5}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic6}>
                        <Avatar src = {MMProfPic6}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic7}>
                        <Avatar src = {MMProfPic7}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic8}>
                        <Avatar src = {MMProfPic8}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic9}>
                        <Avatar src = {MMProfPic9}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic10}>
                        <Avatar src = {MMProfPic10}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic11}>
                        <Avatar src = {MMProfPic11}/>
                    </ToggleButton>
                    <ToggleButton value = {MMProfPic12}>
                        <Avatar src = {MMProfPic12}/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </DialogContent>
            <DialogActions>
                <Button color = "danger" onClick = {handleClose}>
                    Cancel
                </Button>
                <Button color = "primary" onClick = {handleSelectedPicture}>
                    Submit
                </Button>
            </DialogActions>
        </Grid>
    );

    return (
        <Grid item> 
            <Grid container direction = "column" justify = "left" className = "profile-card">
                <Paper variant = "elevation" elevation = {2} className = "profile-background">
                    <CardHeader title = {`Welcome ${props.username}`}/>
                    <Divider />
                    <Grid item>
                        <Card className = {classes.root} justify = "left">
                            <Grid item align = "center">
                                <Avatar alt = "Profile Picture" align = "center" className = {classes.avatar} src = {props.profilePicture} />
                                {/* TODO: Create a modal that allows the user to change their profile picture. Going to be done statically at the moment. */}
                                <Button alt = "Edit Picture" onClick = {handleOpen}> Edit Picture </Button>
                                <Dialog open = {open} onClose = {handleClose} scroll = 'paper' aria-labelledby = "edit-profile-modal" aria-describedby = "profile-pictures">
                                    {dialogBody}
                                 </Dialog>
                            </Grid>
                            <Divider />
                            <Grid item>
                                <Typography variant = "overline"> Full Name </Typography>
                                <Typography variant = "h6"> {props.fullName} </Typography>
                            </Grid> 

                            <Grid item>
                                <Typography variant = "overline"> Email </Typography>
                                <Typography variant = "h6"> {props.email} </Typography>
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
                                    Badge Count:
                                </Typography>
                                <Typography>
                                    {props.badgeCount}
                                </Typography>
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
    const newEvents = [
        {
            id: 1,
            eventTitle: "Hello",
            eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel augue eget lectus vestibulum consequat eu non purus. Cras laoreet turpis eget erat mollis, sed porta lacus dapibus. Nunc pharetra porttitor nunc, nec dictum magna cursus a. Nam eget consectetur purus, rhoncus convallis velit. Sed laoreet dui lectus, quis interdum nisi commodo at. Quisque non enim sed augue vestibulum malesuada. Suspendisse potenti. Donec non dolor vitae urna posuere placerat. Sed non sagittis risus, a egestas nulla. Nam auctor a massa vel dapibus. Duis ultricies pharetra diam tincidunt lacinia. In lacus nunc, semper in vulputate vitae, tempus at nisl. Praesent laoreet diam dui, ac volutpat velit suscipit ac. Praesent justo nibh, interdum at hendrerit vel, facilisis in ligula. Proin ornare lacinia molestie.",
            eventStartDate: "April 20, 2021",
            eventEndDate: "April 21, 2021",
        },
        {
            id: 2,
            eventTitle: "Hell2",
            eventDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel augue eget lectus vestibulum consequat eu non purus. Cras laoreet turpis eget erat mollis, sed porta lacus dapibus. Nunc pharetra porttitor nunc, nec dictum magna cursus a. Nam eget consectetur purus, rhoncus convallis velit. Sed laoreet dui lectus, quis interdum nisi commodo at. Quisque non enim sed augue vestibulum malesuada. Suspendisse potenti. Donec non dolor vitae urna posuere placerat. Sed non sagittis risus, a egestas nulla. Nam auctor a massa vel dapibus. Duis ultricies pharetra diam tincidunt lacinia. In lacus nunc, semper in vulputate vitae, tempus at nisl. Praesent laoreet diam dui, ac volutpat velit suscipit ac. Praesent justo nibh, interdum at hendrerit vel, facilisis in ligula. Proin ornare lacinia molestie.",
            eventStartDate: "April 21, 2021",
            eventEndDate: "April 22, 2021",
        }
    ]
    // Styles for Our Component
    // const classes = useStyles(); this isn't needed on this component.
    const padding = { padding: 40 }

    // Needed to hold the history and working user context of our application.
    // const history = useHistory();
    
    // Holding the information about our user.
    const { userProfile, loggedIn, loading} = useContext(AuthContext);
    
    // TODO: Need to find a way to be able to use my object correctly. However, I am having
    // problems with object of our user profile. Need to be able to wait for all the values
    // to be available for use or they will return as undefined.
    // Working at the moment but gonna make sure everything is good.

    if(loading === true || userProfile === undefined) {
        return <Loader type = "ThreeDots"/>
    } 


    return (
        // conditional code for if a user is logged in as the correct user.
        <>
        { loggedIn === false && (
            <Redirect to = "/"/>
        )}
        {userProfile !== undefined && loggedIn === true && (
            <div className = "profile-page">
                {/* starting with a container */}
                <Grid container justify = "left" spacing = "3" direction = "row" style = {padding} >
                {/* needs a photo in the box */}
                    <ProfileCard 
                        username = {userProfile.userName} 
                        profilePicture = {userProfile.profilePicture}
                        fullName = {userProfile.fullName} 
                        email = {userProfile.email}
                        birthDate = {userProfile.birthDate}
                        userBio = {userProfile.bio}
                        userId = {userProfile._id}
                    />
                    <BadgeCard
                        username = {userProfile.userName} 
                        badges = {"No Badges Yet!"} 
                        badgeCount = {userProfile.badgeCount}
                        dailyChallenges = {"eat a cookie today"} 
                        weeklyChallenges = {"meditate everyday"} 
                    />

                    <Leaderboard/>
                    
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
                                events = {newEvents}
                                eventHeaderTitle = {userProfile.event.title}
                                eventHeaderDate = {userProfile.event.startDate}
                                cardMediaImage = {userProfile.profilePicture} 
                                eventDescription = {userProfile.event.eventDescription}
                            />
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        )}

        </>
    );
}

// Default Information Needed for Our Components

BadgeCard.defaultProps = {
    badgeCount: 0,
    badges: "No Badges Yet!",
    dailyChallenges: "No Daily Challenges Avaiable Yet!",
    weeklyChallenges: "No Weekly Challenges Avaiable Yet!"
}

ProfileCard.defaultProps = {
    fullName: "No Name Provided!",
    username: "No Username Provided!",
    email: "No Email Inputted!",
    birthDate: "No Birth Date for User!",
    userBio: "No User Biography is available!"
}

EventCard.defaultProps = {
    eventHeaderTitle: "Event",
    eventDescription: "No Description for This Event!"
}