import * as actions from '../actions/commentsActions';

const INITIAL_STATE = {
    comments: [],
    loading: false,
    error: false,
};

const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.GET_COMMENTS: {
            return {...state, loading: true}
        }
        case actions.GET_COMMENTS_OK: {
            return {comments: action.payload, loading: false, error: false}
        }
        case actions.GET_COMMENTS_ERROR: {
            return  {...state, error: true, loading: false}
        }
        default:
            return state;
    }
};

export default commentsReducer;