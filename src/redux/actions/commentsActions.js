export const GET_COMMENTS = 'GET_COMMENTS';
export const GET_COMMENTS_OK = 'GET_COMMENTS_OK';
export const GET_COMMENTS_ERROR = 'GET_COMMENTS_ERROR';

const actionGetComments = () => ({
    type: GET_COMMENTS,
});

const actionGetCommentsOk = (comments) => ({
    type: GET_COMMENTS_OK,
    payload: comments,
});

const actionGetCommentsError = () => ({
    type: GET_COMMENTS_ERROR,
});

export const getComments = (id) => {
    return async (dispatch) => {
        dispatch(actionGetComments());

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            const comments = await res.json();
            dispatch(actionGetCommentsOk(comments));
        } catch (error) {
            console.log(error);
            dispatch(actionGetCommentsError());
        }
    }
};