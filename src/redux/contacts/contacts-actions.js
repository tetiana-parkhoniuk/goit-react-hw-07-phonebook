import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/Add', (name, number) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    },
}));

const deleteContact = createAction('contacts/Delete');

const changeFilter = createAction('contacts/changeFilter');

//pending
const fetchContactsRequest = createAction('contacts/fetchContactsRequest');

//fulfilled
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');

//rejected
const fetchContactsError = createAction('contacts/fetchContactsError');




export default {
    addContact,
    deleteContact,
    changeFilter,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError
};