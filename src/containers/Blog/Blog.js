import React, { Component } from "react";
import Posts from "./Posts/Posts";
import { Route, NavLink } from "react-router-dom";

import "./Blog.css";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";
class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                {" "}
                <NavLink
                  to="/"
                  exact
                  // activeClassName="my-active"
                  // activeStyle={{
                  //   color: "#fa923",
                  //   textDecoration: "underline"
                  // }}
                >
                  Home
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;
