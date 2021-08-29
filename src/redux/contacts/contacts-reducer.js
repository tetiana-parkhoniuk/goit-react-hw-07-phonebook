import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-actions';

// const itemsReducer = createReducer([], {
//     [actions.addContact]: (state, { payload }) => [payload, ...state],
//     [actions.deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload),
// });

// const filterReducer = createReducer('', {
//     [actions.changeFilter]: (state, {payload}) => payload,
// });

// export default combineReducers({
//     items: itemsReducer,
//     filter: filterReducer,
// });

const entities = createReducer([], {
    [actions.fetchContactsSuccess]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [actions.fetchContactsRequest]: () => true,
    [actions.fetchContactsSuccess]: () => false,
    [actions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
    [actions.fetchContactsError]: (state, { payload }) => payload,
    [actions.fetchContactsRequest]: () => null,
});

const filter = createReducer('', {
    [actions.changeFilter]: (state, {payload}) => payload,
});

export default combineReducers({
    entities,
    isLoading,
    error,
    filter,
})
