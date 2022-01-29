export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_OK = 'GET_POSTS_OK';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const actionGetPosts = () => ({
    type: GET_POSTS,
});

const actionGetPostsOk = (posts) => ({
    type: GET_POSTS_OK,
    payload: posts,
});

const actionGetPostsError = () => ({
    type: GET_POSTS_ERROR,
});

export const getPosts = () => {
    return async (dispatch) => {
        /**
         * 1. Avisarnos que va a pedir los posts. Hace un fetch
         * 2. Cuando vuelve el fetch, OK o ERROR.
         */
        dispatch(actionGetPosts());

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();

            dispatch(actionGetPostsOk(data));
        } catch (error) {
            console.log(error);
            dispatch(actionGetPostsError());
        }
    };
};