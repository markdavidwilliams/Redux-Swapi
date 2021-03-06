import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  charsArr: [],
  fetching: false,
  fetched: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      console.log(action.payload);
      return Object.assign({}, state, { fetching: false, fetched: true, charsArr: action.payload });
    case ERROR:
      return Object.assign({}, state, { fetching: false, error: action.payload });
    default:
      return state;
  }
};
