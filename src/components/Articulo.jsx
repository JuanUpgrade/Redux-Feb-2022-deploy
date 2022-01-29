import React from 'react';
import {Link} from 'react-router-dom';

const Articulo = ({post, summary = false}) => (
  <article>
    {summary ? <h2>{post.title}</h2> : <h1>{post.title}</h1>}
    <hr/>
    <p>{summary ? post.body.substring(0, 100) : post.body}</p>

    {summary && (
      <Link to={`/posts/${post.id}`} className="btn btn-primary">
        View Post
      </Link>
    )}
    <hr/>
  </article>
);

export default Articulo;