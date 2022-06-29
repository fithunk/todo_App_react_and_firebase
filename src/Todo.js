import React from 'react'
import {List, ListItem, ListItemAvatar, ListItemText} from '@mui/material';

function Todo(props) {
  return (
    <List>
        <ListItem>
          <ListItemAvatar>
          </ListItemAvatar>
          <ListItemText primary={props.text} secondary =  "todos items"/>
        </ListItem>
    </List>
  )
}

export default Todo