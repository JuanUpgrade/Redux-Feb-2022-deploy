import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components";
import { HomePage, PostsPage, PostPage } from "./pages";
import "./App.css";

function App(props) {
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
