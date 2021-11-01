import React from 'react'
import { IPost } from '../models/IPost'

export default function PostItem({post}: any) {
  return (
    <div className='post'>
      {post.id}. {post.title}
      <button>Delete</button>
    </div>
  )
}
