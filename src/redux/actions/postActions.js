export const GET_POST = 'GET_POST';
export const GET_POST_OK = 'GET_POST_OK';
export const GET_POST_ERROR = 'GET_POST_ERROR';

const actionGetPost = () => ({
    type: GET_POST,
});

const actionGetPostOk = (post) => ({
    type: GET_POST_OK,
    payload: post,
});

const actionGetPostError = () => ({
    type: GET_POST_ERROR
})

export const getPost = (id) => {
    return async (dispatch) => {
        dispatch(actionGetPost());

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const data = await res.json();
            dispatch(actionGetPostOk(data));
        } catch(error) {
            dispatch(actionGetPostError());
        }
    };
};