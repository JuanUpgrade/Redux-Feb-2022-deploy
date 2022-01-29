import * as actions from '../actions/postsActions'

const INITIAL_STATE = {
    posts: [],
    error: false,
    loading: false,
};

// es similar a useState;

// action = {
//     type: TIPO_DE_ACCION, -> Qué se ejecuta
//     payload: [...] -> Información que recibimos/enviamos
// }

const postsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.GET_POSTS: {
            return { ...state, loading: true };
        }
        case actions.GET_POSTS_OK: {
            return { posts: action.payload, loading: false, error: false };
        }
        case actions.GET_POSTS_ERROR: {
            return { ...state, error: true, loading: false}
        }
        default:
            return state;
    }
};

export default postsReducer;