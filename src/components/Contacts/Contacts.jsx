import DeleteIcon from '@mui/icons-material/Delete';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import {
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { getContacts, getFilter } from '../../redux/selectors';

function Contacts({ children }) {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  return (
    <div>
      {children}
      <Grid item xs={12} md={6}>
        <List sx={{ maxWidth: '500px' }}>
          {filteredContacts.map(({ id, name, number }) => (
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <DeleteIcon />
                </IconButton>
              }
              key={id}
            >
              <ListItemAvatar>
                <Avatar>
                  <LocalPhoneIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={`${name}  ${number}`} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </div>
  );
}

export default Contacts;
