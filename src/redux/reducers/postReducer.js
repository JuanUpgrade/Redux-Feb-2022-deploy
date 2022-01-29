import * as actions from "../actions/postActions";

const INITIAL_STATE = {
  post: {},
  loading: false,
  error: false,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_POST: {
      return { ...state, loading: true };
    }
    case actions.GET_POST_OK: {
      return { ...state, post: action.payload, loading: false, error: false };
    }
    case actions.GET_POST_ERROR: {
        return {...state, error: true, loading: false}
    }
    default:
      return state;
  }
};

export default postReducer;
