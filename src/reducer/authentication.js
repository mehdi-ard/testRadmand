import { ADD_TOKEN, REMOVE_TOKEN, GET_TOKEN } from 'config/enums';
import storage from '../storage';

const token = (state = null, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return [storage.set('token', action.token)];
    case GET_TOKEN:
      return storage.get(action.token);
    case REMOVE_TOKEN:
      return [storage.remove(action.token)];
    default:
      return state;
  }
};

export default token;
