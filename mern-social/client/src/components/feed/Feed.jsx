import { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import axios from 'axios'

export default function Feed({username}){
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get('/posts/profile/'+username) 
      : await axios.get('posts/timeline/60e1b1e82fac7b53d0ad7eb0')
      setPosts(res.data)
    }
    fetchPosts()
  }, [username])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map(p => (
          <Post post={p} key={p._id}/>
        ))}
      </div>
    </div>
  )
}