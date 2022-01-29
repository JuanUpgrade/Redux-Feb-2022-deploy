import { useEffect } from "react";
import { connect } from "react-redux";
import { getComments } from "./redux/actions/commentsActions";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components";
import { HomePage, PostsPage, PostPage } from "./pages";
import "./App.css";

function App(props) {
  useEffect(() => {
    // props.dispatch(getComments(5))
  }, []);

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default connect()(App);
