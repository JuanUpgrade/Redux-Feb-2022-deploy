import { useEffect } from "react";
import { connect } from "react-redux";
import { Articulo } from "../components";
import {getPosts} from '../redux/actions/postsActions';

const PostsPage = (props) => {
    const {dispatch, posts, loading, error} = props;
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    const showPosts = () => {
        if (loading) return <div>Cargando...</div>
        if(error) return <div>Ha ocurrido un error</div>

        return posts.map(post => <Articulo key={post.id} post={post} summary={true} />);
    };

    return (
        <div className="container">
            <h1>Artículos de la web</h1>
            {showPosts()}
        </div>
    );
};

const mapStateToProps = (state) => ({
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
});

export default connect(mapStateToProps)(PostsPage);