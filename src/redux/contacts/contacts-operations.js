import * as contactsAPI from '../../services/contactsAPI';
import actions from './contacts-actions';

export const fetchContacts = () => async dispatch => {
    dispatch(actions.fetchContactsRequest());

    try {
        const contacts = await contactsAPI.fetchContacts();
        dispatch(actions.fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(actions.fetchContactsError(error));
    }
};
