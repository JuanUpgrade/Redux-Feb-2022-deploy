import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer,
    post: postReducer,
});

export default rootReducer;