import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
  handleClick = () => {
    this.props.fetchPostsAndUsers()
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id} style={{margin: 10}}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        <button className="ui primary button" onClick={this.handleClick}>Add Posts to Display</button>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPostsAndUsers: () => {
//       dispatch(fetchPostsAndUsers())
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(PostList);

// alternate way to specify a dispatch without using mapDispatchToProps
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
