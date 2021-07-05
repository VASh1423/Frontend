const router = require('express').Router()
const Post = require('../models/Post')
const User = require('../models/User')

// crate a post
router.post('/', async (req, res)=>{
  const newPost = new Post(req.body)
  try {
    const savedPost = await newPost.save()
    res.status(200).json(savedPost)
  } catch (error) {
    res.status(500).json(error)
  }
})

// update a post
router.put('/:id', async (req, res)=>{
  try {
    const post = await Post.findById(req.params.id)
    if(post.userId === req.body.userId){
      await post.updateOne({$set: req.body})
      res.status(200).json('the post has been updated')
    }else{
      res.status(403).json('you can update only your posts')
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// delete a post
router.delete('/:id', async (req, res)=>{
  try {
    const post = await Post.findById(req.params.id)
    if(post.userId === req.body.userId){
      await post.deleteOne()
      res.status(200).json('the post has been deleted')
    }else{
      res.status(403).json('you can delete only your posts')
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// like / dislike a post
router.put('/:id/like', async (req, res)=>{
  try {
    const post = await Post.findById(req.params.id)
    if(!post.likes.includes(req.body.userId)){
      await post.updateOne({$push: {likes: req.body.userId}})
      res.status(200).json('the post has been liked')
    }else{
      await post.updateOne({$pull: {likes: req.body.userId}})
      res.status(200).json('the post has been disliked')
    }
  } catch (error) {
    res.status(500).json(error)
  }
})

// get a post
router.get('/:id', async (req, res)=>{
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

// get timeline posts
router.get('/timeline/all', async (req, res)=>{
  try {
    const currentUser = await User.findById(req.body.userId)
    const userPosts = await Post.find({userId: currentUser._id})
    const friendPost = await Promise.all(
      currentUser.followings.map(friendId=>{
        return Post.find({userId: friendId})
      })
    )
    res.json(userPosts.concat(...friendPost))
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router