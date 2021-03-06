import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

const Posts = ({syncPots}) => {
  if(!syncPots.length){
    return <p>Постов пока нет</p>
  }
  return syncPots.map(post => <Post post={post} key={post.id}/>)
}

const mapStateToProps = state => {
  return{
    syncPots: state.posts.posts
  }
}

export default connect(mapStateToProps, null)(Posts)