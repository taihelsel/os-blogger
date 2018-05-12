import React, { Component } from 'react';

/*React Components*/
/*Post Body*/
import Header from ".././Header.js";
import PostHead from "./PostHead.js";
import Article from "./Body/Article.js";
import AuthorAbout from "./Body/AuthorAbout";
import Related from  "./Body/Related.js";
import Comments from "./Body/Comments.js";
/*Post Sidebar*/
import PostSidebar from "./SideBar/PostSidebar.js";
class SinglePost extends Component {
  render() {
    return (
        <section id="SinglePost">
            <Header />
            <hr className="head-divider" />
            <PostHead />
            <PostSidebar />
            <Article />
            <AuthorAbout />
            <Related />
            <Comments />
        </section>
    );
  }
}

export default SinglePost;
