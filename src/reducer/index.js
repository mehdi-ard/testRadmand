import { combineReducers } from 'redux';
import token from './authentication';
import list from './listSelect';

export default combineReducers({
  token,
  list,
});
