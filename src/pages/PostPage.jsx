import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getComments } from '../redux/actions/commentsActions';
import { getPost } from "../redux/actions/postActions";
import { Articulo, Comment } from '../components';

const PostPage = (props) => {
    console.log(props);
    const {dispatch, post, loading, error, comments} = props;
    const {id} = useParams();

    useEffect(() => {
        dispatch(getComments(id));
        dispatch(getPost(id));
    }, []);

    const showPost = () => {
        if (loading) return <div>Cargando artículo...</div>
        if (error) return <div>Ha ocurrido un error</div>

        return <Articulo post={post} />
    };

    const showComments = () => {
        if (loading) return <div>Cargando comentarios...</div>
        if (error) return <div>Ha ocurrido un error</div>

        return comments.map(comment => <Comment key={JSON.stringify(comment)} comment={comment} />)
    };

    return (
        <div className="container">
            {showPost()}
            <h2>Comentarios del artículo</h2>
            {showComments()}
        </div>
    )
};

const mapStateToProps = ({post, comments}) => ({
    post: post.post,
    loading: post.loading,
    error: post.error,
    comments: comments.comments,
});

export default connect(mapStateToProps)(PostPage);