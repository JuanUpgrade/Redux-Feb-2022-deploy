import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './redux/actions/postsActions';
import './App.css';

function App(props) {
  useEffect(() => {
    props.dispatch(getPosts());
  }, []);

  console.log(props);

  const showPosts = () => {
    if (props.loading) return <div>Loading...</div>

    if (props.error) return <div>Ha ocurrido un error</div>

    return props.posts.map(post => <p key={post.id}>{post.title}</p>);
  };

  return (
    <div className="App">
      APP Working
      {showPosts()}
    </div>
  );
};

const mapStateToProps = ({posts: {loading, posts, error}}) => {
  return ({
    loading: loading,
    posts: posts,
    error: error,
  });
}

export default connect(mapStateToProps)(App);
