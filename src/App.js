import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComments } from './redux/actions/commentsActions';

import './App.css';

function App(props) {
  useEffect(() => {
    props.dispatch(getComments(5))
  }, []);

  return (
    <div className="App">
      APP Working
    </div>
  );
};

export default connect()(App);
