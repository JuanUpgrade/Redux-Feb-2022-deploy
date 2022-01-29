import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './redux/actions/postsActions';
import './App.css';

function App(props) {
  useEffect(() => {
    props.dispatch(getPosts());
  }, []);

  console.log(props);

  return (
    <div className="App">
      APP Working
    </div>
  );
};

const mapStateToProps = ({posts: {loading, posts}}) => {
  return ({
    loading: loading,
    posts: posts,
  });
}

export default connect(mapStateToProps)(App);
