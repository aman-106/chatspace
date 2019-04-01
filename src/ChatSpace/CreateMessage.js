import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles';
import io from 'socket.io-client';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const socket = io.connect('http://localhost:3000');
const generateList = (msgList = []) => Array.prototype.map.call(msgList, (msg, index) => {
    return (
        <ListItem>
            <ListItemText
                key={index}
                primary={msg}
            />
        </ListItem>
    )
})

export function MessageHistory() {
    const [msgHistory, setMsgHistory] = useState(undefined);
    socket.on('chat message', function (msg) {
        if (msgHistory) {
            setMsgHistory([...msgHistory, msg]);
        } else {
            setMsgHistory([msg])
        }

    });
    return (
        <List dense={false}>
            {generateList(msgHistory)}
        </List>
    );
}

export default function CreateMessage(props) {
    const { classes } = props;
    const [message, editMessage] = useState('');
    function createMessage() {
        console.log('message from ui', message);
        socket.emit('chat message', message);
        editMessage(''); // clear
    }
    // const classes = makeStyles(styles);
    socket.on('connect', () => {
        console.log('socket.connected', socket.connected); // true
        socket.emit('connect', message);
    });
    return (
        <div>
            <TextField
                label=""
                multiline
                className={classes.textField}
                value={message}
                onChange={(event) => editMessage(event.target.value)}
                margin="normal"
                variant="outlined"
            />
            <Fab color="primary" aria-label="Add" className={classes.fab} onClick={createMessage}>
                <AddIcon />
            </Fab>
        </div>
    )

}