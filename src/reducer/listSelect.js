import { SELECT_LIST } from 'config/enums';

const listTable = (state = [], action) => {
  switch (action.type) {
    case SELECT_LIST:
      return action.list;
    default:
      return state;
  }
};

export default listTable;
