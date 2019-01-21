import { combineReducers } from 'redux'
import usersReducer from './users';
import pageReducer from './page';
import buttonReducer from './button';

export default combineReducers({
    users: usersReducer,
    page: pageReducer,
    button: buttonReducer
});