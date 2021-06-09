import React from 'react';
import { Paper, Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    box: {
        display: 'flex',
        height: '70vh',
        width: '50vw',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        height: '85.5vh',
        alignItems: 'center',
        justifyContent: 'center',


    },
    layer_1: {
        display: 'flex',
        height: '50%',
        width: '50vw',
        flexDirection: 'column',
        background: 'linear-gradient(to top, #639173, #dbd5a3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        display: 'flex',
        height: '30px',
        width:'200px',
        borderRadius:25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'-15px',
        color:'#dbd5a3'
    },
    avatar:{
        width:120,
        height:120,
        backgroundColor:'#639173'
    },
    ring:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:130,
        height:130,
        borderRadius:'50%',
        border:'3px solid #dbd5a3'
    },
    username: {
        borderBottom:'2px solid #dbd5a3',
        color:'#eee'
    },
    about:{
        color:'#639173',
        marginTop:'5vh'
    }
}))

function Profile({ user }) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div>
                <Paper elevation={3} className={classes.box}>
                    <Paper elevation={3} className={classes.layer_1}>
                        <div className={classes.ring}>
                            <Avatar className={classes.avatar}>{user.username}</Avatar>
                            </div>
                            <div ><h3 className={classes.username}>{user.username}</h3></div>
                    </Paper>
                    <Paper elevation={6} className={classes.title}>
                        <h3>ABOUT</h3></Paper>
                <div className={classes.about}>
                    <h4>Name : {user.username}</h4>
                    <h4>MailId : {user.mailId}</h4>
                    <h4>Phone Number : {user.phoneNumber}</h4>
                </div>
                </Paper>
            </div>
        </div>
    );
}

export default Profile;