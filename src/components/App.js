import React from 'react';
import PostList from './PostList';

const App = () => {
  return (
    <div className="ui container" style={{margin: 10}}>
      <div className="ui segment raised">
        <PostList />
      </div>
    </div>
  )
}

export default App;