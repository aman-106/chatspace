import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CreateMessage, { MessageHistory } from './CreateMessage';
import { makeStyles } from '@material-ui/styles';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    textField: {
        margin: theme.spacing.unit,
    }
});






export default function ChatSpace(props) {
    const { loggedUser, chatHistory } = props;
    const classes = makeStyles(styles);
    return (
        <Grid container item xs={12}>
            <Grid container spacing={16}>
                <Paper className={classes.paper}>
                    <Typography variant="h5" >
                        {loggedUser.email}
                    </Typography>
                    <MessageHistory chatHistory={chatHistory} />
                    <CreateMessage classes={classes} />
                </Paper>
            </Grid>
        </Grid>
    );
}