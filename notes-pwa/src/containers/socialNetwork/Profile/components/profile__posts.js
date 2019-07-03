import React, {Component} from 'react';
import PostCreate from './profile__post_create';
import Post from './profile__post';
import './profile__posts.scss';

class ProfilePosts extends Component {
  render() {
    console.log(this.props.data)
    return (
      <section className="network-profile__posts">
       <PostCreate/>
        <div className="network-profile__posts-list">
          <ul>
            <Post
              message="lorem ipdood c"
              like="15"
            />
          </ul>
        </div>
      </section>
    )
  }
}

export default ProfilePosts;